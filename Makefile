# Time-stamp: "2021-04-05 15:19:15 queinnec"

work : nothing 
clean :: cleanMakefile

run.local.dev :
	npm run dev

# Static site is deployed on https://paracamplus.github.io/lf/
# That URL corresponds to the README.md content.
# GitHub Page setting is branch: deployed, folder: docs/
publish :
	git status .
	git commit -m "Before deployment on $$(date -u +%Y%m%d_%H%M%S)" .
	git push
	./node_modules/.bin/sapper --basepath lf/ export --legacy
# npx serve __sapper__/export
# delete old branch deployed if existing:
#	-git branch -D deployed
#	-git push origin --delete deployed
	-git branch deployed
	git checkout deployed
	git pull origin deployed
	git merge -m "Automatic reset" main
	git status .
	rm -rf docs && mv __sapper__/export ./docs
	git add docs
	git commit -m "Deployed on $$(date -u +%Y%m%d_%H%M%S)" .
	git status .
	git push origin deployed
	git status .
	git checkout main


# ##################################### Once

init :
#	cd .. ; git clone git@github.com:paracamplus/lf.git
	npx degit --force "sveltejs/sapper-template#rollup" .
	npm install

# end of Makefile

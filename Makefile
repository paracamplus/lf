# Time-stamp: "2021-04-03 16:03:27 queinnec"

work : nothing 
clean :: cleanMakefile

run.local.dev :
	npm run dev


# ##################################### Once

init :
#	cd .. ; git clone git@github.com:paracamplus/lf.git
	npx degit --force "sveltejs/sapper-template#rollup" .
	npm install

# end of Makefile

# kick start one example
# use `pnpm start (or build) docgen-nuxt`

exampleName=${2:-basic}
echo "start in examples/$exampleName"
cd examples/$exampleName
if [ $1 = "build" ]; then
    pnpm styleguide:build
else
    pnpm styleguide
fi

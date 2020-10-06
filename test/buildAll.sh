cd examples
for D in *; 
do
    cd ..
    pnpm build "${D}" -- --ci
    cd examples
done 
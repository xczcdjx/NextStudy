// 待续
const { execSync } = require('child_process');
execSync(`npx typeconv -f ts -t oapi --oapi-format yaml --output-extension 'swagger.yaml' --output-directory 'src/schemas/openapi' 'src/schemas/**/*.ts'`);


/*const fs = require('fs');
const path = require('path');

// 获取 TypeScript 文件路径
const schemaFiles = fs.readdirSync(path.resolve(__dirname, '../src/schemas'))
    .filter(file => file.endsWith('.ts'))
    .map(file => path.resolve(__dirname, '../src/schemas', file));

// 逐个处理每个 TypeScript 文件
schemaFiles.forEach(file => {
    const baseName = path.basename(file, '.ts');
    console.log(file)
    // 执行 typeconv 命令，生成每个接口的 OpenAPI 文件
    try {
        execSync(`npx typeconv -f ts -t oapi --oapi-format yaml --output-extension 'swagger.yaml' --output-directory 'src/schemas/openapi' 'src/schemas/!*.ts'`);
        console.log(`Generated Swagger YAML for ${baseName}`);
    } catch (error) {
        console.error(`Error generating Swagger YAML for ${baseName}`, error);
    }
});*/

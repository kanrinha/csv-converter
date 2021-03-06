const { readFileSync } = require("fs")

class Reader {

    Read(filePath) {

        try {
            const fileContent = readFileSync(filePath, { encoding: "utf-8" })
            return fileContent
        } catch(readError) {
            console.log(`\u001b[31m ${readError}`)
            return undefined
        }

    }

}

module.exports = Reader
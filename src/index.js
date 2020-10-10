module.exports = function check(str, bracketsConfig) {
    let copyStr = str;

    while (true) {
        for (let i = 0; i < bracketsConfig.length; i++) {
            const firstPartRegExp = isNaN(parseInt(bracketsConfig[i][0]))
                ? "\\" + bracketsConfig[i][0]
                : bracketsConfig[i][0];
            const secondPartRegExp = isNaN(parseInt(bracketsConfig[i][1]))
                ? "\\" + bracketsConfig[i][1]
                : bracketsConfig[i][1];

            const regexp = new RegExp(firstPartRegExp + secondPartRegExp);

            str = str.replace(regexp, "");
        }

        if (str === copyStr) {
            return false;
        }

        if (str === "") {
            return true;
        }

        copyStr = str;
    }
};

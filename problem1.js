import fetch from 'node-fetch';
import https from 'https';


const salary = [
    { salaryInIDR: 4.001111510555328e6, id: 1 },
    { salaryInIDR: 4685534.363816402, id: 2 },
    { salaryInIDR: 3013601.6163306856, id: 3 },
    { salaryInIDR: 9.619331420029558e6, id: 4 },
    { salaryInIDR: 8.380696500881106e6, id: 5 },
    { salaryInIDR: 9091824.554498984, id: 6 },
    { salaryInIDR: 6.996573171622309e6, id: 7 },
    { salaryInIDR: 3.910254930004663e6, id: 8 },
    { salaryInIDR: 5.968429287836904e6, id: 9 },
    { salaryInIDR: 5.9648082820075266e6, id: 10 }
];

let varUSD = { salaryInUSD: '' };

let fooData = [];

function funcTest(params, usd) {
    fooData = Object.assign({}, params, { ...varUSD, salaryInUSD: usd });
    console.log(fooData);
};

function convertCurrency(amount, fromCurrency, toCurrency, cb) {
    var apiKey = '2747f6a6287ce503a02a';

    fromCurrency = encodeURIComponent(fromCurrency);
    toCurrency = encodeURIComponent(toCurrency);
    var query = fromCurrency + '_' + toCurrency;

    var url = 'https://free.currconv.com/api/v7/convert?q='
        + query + '&compact=ultra&apiKey=' + apiKey;

    https.get(url, function (res) {
        var body = '';

        res.on('data', function (chunk) {
            body += chunk;
        });

        res.on('end', function () {
            try {
                var jsonObj = JSON.parse(body);

                var val = jsonObj[query];
                if (val) {
                    var total = val * amount;
                    cb(null, Math.round(total * 100) / 100);
                } else {
                    var err = new Error("Value not found for " + query);
                    console.log(err);
                    cb(err);
                }
            } catch (e) {
                console.log("Parse error: ", e);
                cb(e);
            }
        });
    }).on('error', function (e) {
        console.log("Got an error: ", e);
        cb(e);
    });
};

const usersSalary = (indexSalary) => {
    const userSalary = salary[indexSalary].id;

    convertCurrency(salary[indexSalary].salaryInIDR, 'IDR', 'USD', function (err, amount) {
        fetch(`http://jsonplaceholder.typicode.com/users/${userSalary}`).then(res => res.json()).then(data => funcTest(data, amount)).catch(err => new Error(err));
    });
};

usersSalary(0);
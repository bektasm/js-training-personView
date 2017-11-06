
let person = 
   {
    "firstName": "Mehmet",
    "lastName": "Karadeniz",
    "gender": "M",
    "birth": new Date(1978, 7, 5),
    "origin": "TR",
    "children": [
        {
            "firstName": "Büsra",
            "gender": "M",
            "birth": new Date(2007, 5, 5),
            "picture": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAADvElEQVRIS52UXWxTZRjH/+97zuk++sGEsRU213ZftNsQ4mDMSdcNM2LMjFEEv4HNLNEb5QpjDAYlXOCVFyZqItkH0YuJxpthwndH58YCCZBiIbDNZuwLWhU6pmvPOY857UrGtq6tb3Iu3jz/5/m953ne/8uQwnKW22o4pyMANgOYBcMZFfThBZ9/Ilk6SybQ4i67dQzA2vlaAv3Ue8P/arL8ZQFbSktNGZL8PgMOgKBfUGwGQDfjwuHzvw/dTgRKCHA6LGs44STAqpKc8gEx9mKvb6R3KV1CgMthvQhCTbIWzMXHmKC3n79+fXqhfkmAa52lEYydTbF4TEZodd/8oz01gN3aCWB3XJypkyBJIiIRGSZDNu7+eX8xm+g7901/W6qAfgC1cfHKFUY0bX0ax3+9gB3Pb0X3iaXaTafdN/xNKQEaHLZLRFS90VEMBRyB6RmYzXkwcRWvNbtw6JsfoaqEgtUrsanChs6fT00rquo94x16JimAuruFcVPQ5x70Fg6P383Kz8/DpZF7+Pj1BvR4rkAniah2FKPj1GU4HYWIhGVk63jYtanqrxyyFrLGRnk+ZNGQQ31deQyYIiLcmQjg6vA4mCjCtaEUv127DUNWBooLVsM7MglSZTg3lkObUXQJotlQ++bUsgA6d058qBu9BsChCYeGJjA8GYDMCU01VRA4w8mLXojEYDaaUFVZBGLaJaIBQ93uOsYYLQvQgiFPRyWY8AkDvSE8kMEYIBsF4J8QoptMI/isGv1kgwDi+Jor/JC+/p1Fb1NCo93zHDVKijAiinxVEj8EImGl7InGlr/TcrImHmw/fKCi/MnPQQTMKoCqxv5AJwACj9ZjjN7T1+35Nu23SEvYtr5kb8srTe0vb6+bcyvFAHOLMfoq+07WPrZrl5I2wFlZVMEV5gZYbn3Nenl/2w6R8dipSSUopHyRU9/6UZL2YckZbHPYLApRH4ACrYAhO/NW15F9ZYjKY5ckPBNuXvPSBz1pA56zF6ySIWlPRVk8eUuwZGr/9zvzGIsdiAjU09x/SwmrPgL9MIrS4wdxUE1pyC679TMAn8bFllAuXGN2GNZmDVheMEd77T8xKTwc//fRWwWgXwHebcMx30LIYy3aCQjBdbaAwihHs8tTQQs2BIvwuHUSNmUWYM2t6Dqd0GhfSm9t/qWkbzBDkdAw5kD+zIpkLV4YDzEI9S3ouPLops1XHMXbnqu5o8+W3c+HPpKRbvG43tOKY85FgA7sqVahDmje+b+V5/KIg9fuRedlbf8fiWJEKCpXSgIAAAAASUVORK5CYII=",
        },
        {
            "firstName": "Serhat",
            "gender": "F",
            "birth": new Date(2009, 6, 5),
            "picture": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAADnElEQVRIS61TXUxbZRh+3tNDKbSWjXWgLAXKOiyUISrKUrfSDTVeLBrBoW6GXSxOE2eMGKMXuyXKxTQx82KaLKKCuhqN28U0upWfTTARx2Y6GjGMtir76eYGBUp7el5zup+0hZ7W6Xv5vc/P937P+xHUi5ptlq0EbmOgCYw7QYgAGAboKAFFkDSfzxYVXRgdHY0tJ0WZ9J21FfeSLHwI8P1ZLjHFJDw6OD45kbOBq7raxEL0NICyLOI32hySCfVD4/7pdPyyEzhtli+VZ8lN/DqKQL39vnPPZTVw2e0Gjs9dAZCXDi7QaVFkNOD8RaW9pBZJozf1e73h5M6SCVy2qq0M+UgyyL6uAt4JP15//ilYK8rQ2fUB5haUrNOLHQM+/7CqQbPNshvgAwqoeIVxftMD9kLng3V4s/sg9u7Zjsb163A+9Dfe//gwTo+fQ1yWb+kJgMvjmxpQn6Cm8hlmfKaAOlpb4GxqwLFTv6FAYFhKi3FfnRV/XrqK46cmYC0z4ceRX3B8WNkHQIDc6PEFRlUNtljNa201az8ikqsf2dRY0tRggzd4GVUlRqxeYQAR4Vp4Ab8GQqgzr4L/j2m4j54IV64pnZy+Nru9u+eIV9Vg5qeeVYJEochiFGNnJ9HUcDde3PcFXm5rRp3lrgQ3KsWxq7sXb+1+HHkEFBRo2agvJIG4tdCx82t1A0+fSdBKyj6LsswQhIx/cWnEzFvu2LjTo2qgNGdP9nQR4zUQ5aeoROeAeBzQGZXFT64rAH+jd3TsIiLOaqAAwkOf3AOBx1KvyYDMgCCkH3caNna8u9znUJ0/fLKnD6BnE8RYBIguACwDohbQGRL/F0BATzobOdoX/rXB/MBBsyyKyg6uXI4MgAXitvRgc3qim6DIUG9VTJAGCbQmlcjzTNRqcHR8l8E8cZzTilz+/sCrGlHzDmmEBEHZLjku7S1ueaFLTTwnA/uhv8pf0p955WntVGey2KFY5b794fr3vO1lgduaoNYdeILBbwC0QSQ5+K3xB5OOpEJFLMLi/GMzD4ckFswAjwhMb3vbyw/nFHL9V7+XxOL5+wHelkwQCcFKmkncdoqN5RLDnCpI7jzN4p4zrdaLGUNe3+tfKWnpBIDabG+boX82X4w/NPak5erN/q2QXR4WL1wKHgPBeZvi12mMwdLV5pb+zSSlhFzrDu5g8Kf/SfwGmZl2+NrNfSkGNe7ACIDG/8MAwM/j28o3KFr/AFvKQiiHTvl5AAAAAElFTkSuQmCC",
        },
        {
            "firstName": "Elif",
            "gender": "F",
            "birth": new Date(2011, 7, 5),
            "picture": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAADiUlEQVRIS6WUb0xTZxTGn3NvaUu9yJS4NA6hyBChi46QLAa1oAnMJSqTLGZEo0aNon4xMZuLMdPpkhm3+MFojGbLnCPOGMNkLgFmwtpBumX+iREJiGUUFSXRgUqh15b7HnOL/LWlrZ5v973neX7ved/zHkKM4chNzyNN2gxiKwFN2qDheIPH8yianKIl6P+L5sxexJKoB5AwJt9LZuQ5b3ifTOYRFRDauaCLANLCGH3javXueW1Akd32PmvcAJACMAPSIMAGAKMbI5xwtXi3R4JMWkFhtq0GhGXDYoMshTCaEBP8uMDV2vl3OEhEQH5+vkXxPX4GInmqYsEz38A4vS7koRWWGZvqb3t/jAtQONdWB6BEmZIIX79/REsEZM9Ow/2HjzCgqhCCQUyNztsdi+MBGBzZtudJilny9asjOkki2LNs2Fr+Ea43t6P1v3tobvPiSd8AS1abxel0jia/VIU9Ioc9YwdpfMxgkCGEgNloxExrCtasXIqczFQkKZaQvK7hGmqcV3DH+wAgeberpf3wxCrCAj6cl3V2vj2zvOXOXZSWFCA3cxZys9KhX/LYUJ8HUOO6iuu32tHc1nHxjybPqpgAP++r6FxVUpD27akL+GzLJxHbvK/fD0uiCbIk4UJtY9eGg6dSYwL8c/rg2fey0svP/e7Cp8sLY3nsuNbk+bWw4kBZTICn7u+nDwbplzZPV7FgjebnZEaEDGqa3mXupGTjiuSCzT0xAYaTfO4zv/n6/SumJJpBen+Gjzpl4bqRxxgXoO+vylySxU0AcgRzAZnzlAXr9ZywEXXY9bnP7CDwUTCNayFmMAg7kxauOzrZJUUF6OLeP0/vkg34TpKGGCwYGmu733JsfKXv4zqikNn583LPtP/XA/QD6UOUODTwAN40vTflJ1q9WnutCg7V1ts7VKVyl+VWagoF9TEqg5A8VAKegkh7LIzaEb+9K8PsW/vFsqXN4UBhj+jz6sYTl4PvbFVZphmSijWmdpSYHnZPRdCjm/TA9G6tOtN6LpCBHmGCmTQuTug6ebh00baoR1RR/e8lV8C6fGKikQSKErrhZxnu4AxoGD829HxHQvelkx9/sHKsdlwFe6sb9lUF0ve/nPMxveCJZmXGzv1fly7+anh9FMBMS6ra1G6RaIzbeYzgbckfcJXN0V9maJ8jgC+rnMUtNK3yTcyHtTncu/ZAWdFl/fsFgRZCKCXTdU4AAAAASUVORK5CYII=",
        },
        {
            "firstName": "Ali",
            "gender": "M",
            "birth": new Date(2018, 8, 5),
            "picture": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAE6UlEQVRIS4VUaWxUZRQ99703a9fpQmnLOFALlRJokAKhCgiyhKFGCH9U4AcuLEmJAQyGkNAWRAzFBIlBGxDTBE3UuIKSChFMBCyitAUs0BY6ZbrQbYYp7Sxv3rvmvTLQZYrfr/d99+Sed+895xKecLq76+PjjAlrSRBfUsJKXigYsEmSFDKYzI1g5RzLXGG0jal+Ug4aLRjyNK+DYNjf4mpKPl5+mNyuO5BDIQiCwEkpqbR05Sqeu2gJM/PXQYGL4uPHdUfLFZUg0NVwEBDe5nAIf128yGX7DgzGMQCaN/95Ltq2hUgQAUFq5JD/RUtGrms4yQiC/tZrW0D4kMPyI+zpU5U4+vlXeNDnh0CExQsLsH7TGzBbLDqGiECS8XqX7J1ltxf4B5MMIei6eSHTYjXdUuWAhUB6jMGsfff2+nCp6gomTpzAdoddi+nvjzCCRARxV8z4/D2jEvTW/17CrBSDVb0ND4GDvwfyDcRGYEgytcc2h+20YEE4QjKkgvt1ledZCc3Rgs2tnaj9txHLFs6CKAhRtXDrthtN7g4smjtdbx2JBqiqOsM2xXllBIHnztlE+DwNrIaTtb/bWlpOf/5dh4/3FvGzU7NHDFnDbNh+kOoaWvDJviKekuMgIgFkNL+ZmFv42QgC380z38u+thVgVW9D7c1mqq5rxiuFc9goiVEJqutcdPXWXbxaWMCSKJDWOdFq6xPNxqy47KUdugAiTJ0Xjl7ncGAyCYao7RCMAqR4MxS/DKXvscKGg1mVQdaE/NT8tf8MIWj9pXQ1iYZjgtFqHD5A0SSSlBxAX1M9zGnpLPAYCnnlkUJQFVYCvp/SnaUriXQRPK5Au7T88J5dsIpVAMYO/jNzkghPay16LtXA6shE+ux5CLRH86i6eezinYcjyUcQaA9tp4qdrOJHAFJEpqJJJTFTha8nAEu8iY0+gYJecUgFRDgxdlnpisHJoxJoj62/7l0DOXgUgElbNlqloiEIKZbBAXDIb9IGyqRZWDuG2HNISliekb+h/39XxeXL5YaJlswdNfdN75h6bsSNQ8fjRNpwmPW7TixZqDI4GeaUCWFnSvd3SsC7LTlvlXtUJ7dXlsUYk9JO1PYnvlDR4UCOzYJVdgWirxGivwuk+MEkQTUmQIm1Q014Gp9Wd+KeX8YSWxcKk+91hv29S9LmbqyJ6uT20x980R02vVbWM5s7+1Wa70jC4qyUJ66KL6+14nrnA44xSfRW4lXkWb3uQCA8zVG4wzNkBi0nSwpI4D8qPM/Qb95UVpkp2xaLtXmOUQm0bn1U1QBPIKRjsmJkFI+pYpGoLN1Z8u5QH5zcdUBm2rqxaSZ6g7qEdRGvnjYBWUlxUc132d2FU/Wtj2IGg4jizKuYZOm7nbF8d/awCnYd8oSlza/X5UJ9qBwNYBQEdubYaXpmqr70tOHKikrnm9r47O02Ugf8pFdAIGx3uPi5xPt3M5bvdgwhcP9cPElV+ZvVNVm5XlkUh69rq0FCWpxVJ2/z9VNIUaKtdC6f6mofbw5uzyjcczyqD2YWH1nTK4sVw10etUfDHiWi8mt7120aVaaRQM7OYy8LRIfAeCqi+0hssA8iRmPmXhC9f8Pg2o+SEn0dR5Xp4MCM9eUGf6rBqTKcRDQDQBaAhAGfCX1g9S4EqgHojP8Bf9t0cJ03WpX/AYH2Kje2qh4RAAAAAElFTkSuQmCC",
        },
    ],
    "address": {
        "street": "Matternhornstr. 123",
        "zip": "8604",
        "city": "Volketswil",
        "country": "CH"
    },
    "languages": ["EN", "DE", "TR"],
    "salary": 53000,
    "friends": [
        {
            "firstName": "Hakan",
            "lastName": "Basak",
            "gender": "M",
            "birth": new Date(1974, 1, 5),
            "profession": "Engineer",
            "salary": 104000,
            "picture": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB6UlEQVRIS2NkoDFgpLH5DKMWEAzhgQ+i/w1SXN+5BM4yMLOrMzIyMPx5//wLw/+/f/79+/2LieH/Wt62j9n4vEHQB1871eewcPAmwwz59fIOwjzG/xG8rR9XUmTBtw6NdUxCKoGMX58zMDAxMoAtYGJlYBS3+PP3+ZEA/rb3WymzYIrjxC3fLPNuf2JmkONhYvj/5x/Dw88/GbQE2Bm8uc+7c+Rt2UWRBT8PLj82ffshy5MPPzKoSIgzsHNyMZy+epXBUVGIITMkaiO7jUsARRb8vnKl7P2xjs4TTA4MZjo6DP8/fWI4feMGgxX/UwY+9cAcNguLqRRZANL8bYbXT2ZZBzbGj7cZ/nx4zsCsEMTw9+HOG1yZKzUJZQSCqQhkwKeFcVvZ31/1YuCVYfj95gHD/1/fGP6IWxcLpi3oo4oFDg4OBhO9Jfaosd4R/vXt149Nr5Uezz3/IejAgQNXyLbA0tJSiJWV1eX///8u//4xuDIzMymgGXafgYFhNyMjw56/f//uOXLkyHtslmENImdnZ/GfP3/dZGJi4ifkQqj8eyYmRrUDBw68QVeP1QI7O7tiBgbGHiINBytjZGTIP3jw4CRiLTjx799/A1IsYGJiPHPo0CEboiwgxWBCaolKpoQMoTijjWwLAD/8qBlhOafVAAAAAElFTkSuQmCC",
            "address": {
                "street": "Seegartenstr. 55",
                "zip": "9000",
                "city": "St.Gallen",
                "country": "CH"
            }
        },
        {
            "firstName": "Selami",
            "lastName": "Has",
            "gender": "M",
            "birth": new Date(1965, 11, 2),
            "profession": "Manager",
            "salary": 78000,
            "picture": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACu0lEQVRIS+3UXUhTYRgH8Od9d86O2o6tJi6V/Ch04ILI/Eicwwq6KOhCqLzQCLyo8CJSDLQLKfPCDxBEBC8jyAi6qqhMcZsEaoJkoE1Jp7l15qabc1/unJ03jn1cxHJ5wDvf2/M8/x/vw3leBHt80B7nwz4Qd8JxR6Qe6K0hSNEMNJWFsYIJOjgXRiJHCB7DGPUHbzdN7aTsCBwc6GvWstBaq57fLEjwMmoFT/Hc3LIP0f6PW5qNfqde5+ZVVeG6+yP/QnYE6oca3rZlL18gKwLgVRGJEQAPtwSIikJSesDH5IShYaGite/a0y5ZAJkx5jpbDkwcRir17wD7zOyfLD8LQyf6/FfQKZtXFqDX65UpmhQ3y1Dso5JjQEcJePlNCAgEuj+7IMiLHoRRqslkEmQBRqPxHAAalppvnc8HFUOBEPCCw7cFz6ec25kIgdFsNo/KAgyGii6MyV0AwB1VJUApMGyurUIkKkLb+0UpUwQgHRaLpUkWYDRWPAMgRQylyHlYeRotWuchEg5B2tE0aB+xCbwQtSGkGLdYTNWyAKmprKx8kU2k2JbKIo0CCPjXXRAhUbF9+Js9KhLeYjEfl70HUmN3d2fph+GRdzdL0jF7KJkOrHsW7Jwr9JLDmcWl5ZcaGxvHZQHkkzZV4Kka0Nbfm57gk3zWOZUU9HV+eTvvbG31RmaOM0gcPZ00Ik9QocMdC4q5aGQi+8gWEqwYSDKVPwgoUQeDD27wSkZJSwCdRC1d732TRQLTIMxeBBFED4NQXiwkJsBPZjQQAl0oMQ8o3QsgoTmYevXa57PZkyWgvLpyLbe4QIMSdCB8uQwkvCD9r3eUhSs9f98iJhAaSxtHCE4SoADBzx0StXV49LEVuO9u+9UmQwbiekWy/eVXDcGTCWfshv8C4r7BuyiI+1zvIitm6T4Qd4I/AAnuFihdRVZdAAAAAElFTkSuQmCC",
            "address": {
                "street": "Dorfstrasse 9",
                "zip": "8000",
                "city": "Zürich",
                "country": "CH"
            }
        },
        {
            "firstName": "Katherina",
            "lastName": "Kusuva",
            "gender": "F",
            "birth": new Date(1983, 4, 4),
            "picture": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAADqUlEQVRIS7WVf0xTVxTHz3uv75U+W7CiLiRIKJbwoyLUgrY1BZbgatgIRFMXiRku21RMNjXZsmmM2z9m2x/sHzOXRc22ZDNTdF22CGoMPiFCpSsyCxMZVFFqUR92hEJ5fT+u6WPdkGirTTj/vXve/X7OueeeczFYYMMWWB9eCmAwGNQAEOnv74+8aGAvBPj8k3rttBA+mJ+9PH9yKgIBNvTHFbfvCMN42ESghIBP9zn0puJXLlSszcpJVStlveDEDFx2jdw8e37wjZNnL/niQeICTCYT/X6D6eeGOkNNTAQhBBg2u+3YqT+dzrbA1tbWVu55kLgAm81Y2PSxnSlbnbEsJjB4+59Hnb33Q2/VFujcNwL+XYcuvNrb2/t3UoC366tqP9tT8WtWRipIEoK/hh5J1zyhOwZdQU6n13XXWJSu+ejLi1aPxzuQFKB+c5V9f6O5ZdD78LHIRkh0K6DOHBknomJ3FRj4q3Jvf++8UdHX13cvKYDFYinaYM5kVoTpJUsX0TDBcYDjOGiUFExwEXAODo8Fp8W17e3tyQEMBgP1mk3f8c5mhzE3K5N8wAZhjA1CcX6OHHDTd2cuXh9+UN3c3CwmlUF0U+3r5T9Wl69Zs72urqDD44UBnx/ec2yE42daWJ9/gGk6+psj6Wual5enObDb9nuhfmnpeHBxgFYu1hfl6sDZdpVbnj4VTtPgU3sPt1Z4PH3DSWVgsRTl73xz3Tm7TZfzweEOAEQBRSogFObgYONqfjLEER9+wWzo6elpe1kAbjabtxIKxc7K0oz1NVUr8f1fdcsFFkURSJKELfYsUKXg6OjJ/g5AwjednddOA4A0H/TMRrNarSdUNN1AEAShoTHYVqOHIz/dlDs4CohmUV2eCQO+x+DzzwDP88JMOPxDV1fXuwkBVqt1h4qmvyYIQiH/jATIzlgEd8Y4WVwGUBQsSVWAKAgwMT0rKYmCEApNNbpcruNzIU9lYDQal2lSNS0pKarS/2ePBBiGy59zATJbkgDDZ31R42amPeEwZ+/u7h6PrT0FKCsr26TWqE+TJCV363ybD5jv53leCk1OOtxu9y/PBOj1eqVWq3VQlGITSSpLCILQRSOMnn3s/GNFjgn8Cx0R+MgtUZTOsSz77dDQ0H/T9bnTtKSkJFulolYhhBdjGFYIOK4FSUqXEFIpCHwMIRhHSLwniqid53lvWlqan2EYIWGR43QlUVlZiY2OjhJzI4zXxVFfwhctkUAi/4IDngC55oQoCeusOAAAAABJRU5ErkJggg==",
            "profession": "Consultant",
            "salary": 99000,
            "address": {
                "street": "Dorfstrasse 9",
                "zip": "7400",
                "city": "Thusis",
                "country": "CH"
            }
        },
    ]
}
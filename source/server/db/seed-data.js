export const cartoons = () => {
    return [
        {
            _id: 'the_simpsons',
            name: 'The Simpsons',
            banner: 'simpsons_banner.jpg',
            pic: 'simpsons_pic.jpg',
            description: `The Simpsons are a family who live in a fictional "Middle American" town of Springfield.[13] Homer, the father, works as a safety inspector at the Springfield Nuclear Power Plant, a position at odds with his careless, buffoonish personality. He is married to Marge Simpson, a stereotypical American housewife and mother. They have three children: Bart, a ten-year-old troublemaker; Lisa, a precocious eight-year-old activist; and Maggie, the baby of the family who rarely speaks, but communicates by sucking on a pacifier. Although the family is dysfunctional, many episodes examine their relationships and bonds with each other and they are often cartoonn to care about one another.[14] The family owns a dog, Santa's Little Helper, and a cat, Snowball V, renamed Snowball II in "I, (Annoyed Grunt)-Bot".[15] Both pets have had starring roles in several episodes.`,
            link: 'https://en.wikipedia.org/wiki/The_Simpsons',
            tmdb_id: 456
        },
        {
            _id: 'family_guy',
            name: 'Family Guy',
            pic: 'familyguy_pic.jpg',
            banner: 'familyguy_banner.jpg',
            description: `The cartoon revolves around the adventures of the Griffin family, consisting of father Peter Griffin, a bumbling yet well-intentioned blue-collar worker; Lois, a stay-at-home mother and piano teacher who is a member of the wealthy Pewterschmidt family; Meg, their awkward teenage daughter who is constantly ridiculed and ignored by the family; Chris, their teenage son, who is overweight, unintelligent and a younger version of his father in many respects; and Stewie, their diabolical infant son of ambiguous sexual orientation who has adult mannerisms and uses stereotypical archvillain phrases. Living with the family is their witty, smoking, martini-swilling, sarcastic, English-speaking anthropomorphic dog Brian, though he is still considered a pet in many respects`,
            link: 'https://en.wikipedia.org/wiki/Family_Guy',
            tmdb_id: 1434
        },
        {
            _id: 'american_dad',
            name: 'American Dad',
            pic: 'americandad_pic.jpg',
            banner: 'americandad_banner.jpg',
            description: `American Dad! is an American adult animated sitcom created by Seth MacFarlane, Mike Barker, and Matt Weitzman for the Fox Broadcasting Company.[2][3] American Dad! is the first television series to have its inception on Animation Domination.[4] The series premiere aired on February 6, 2005, following Super Bowl XXXIX, three months before the rest of the first season aired as part of the Animation Domination block, commencing on May 1, 2005.[5][6]
Creative direction of American Dad! has largely been guided by Barker (prior to his exit from the cartoon in season 10) and Weitzman as opposed to MacFarlane, resulting in a series that is different from its counterparts.[7] Unlike its sister cartoons, Family Guy and The Cleveland Show, American Dad! does not lean as heavily on the use of cutaway gags, and is less concerned with conventional "setup-punchline" jokes,[3] instead deriving its humor mostly from the quirky characters, the relationships between family members, and the relatively relatable plots. The cartoon is not as heavy on pop cultural allusions as MacFarlane's Family Guy, and is more concerned with telling stories while maintaining the integrity and realism of the family members.[2] While the core issues and resolutions are relatable in most episodes, the cartoon nonetheless weaves in fantastical elements, pitching the tone of the cartoon somewhere between observational comedy and farce. The plots are often absurd, but they are grounded by family stories and real-world issues.`,
            link: 'https://en.wikipedia.org/wiki/American_Dad!',
            tmdb_id: 1433
        },
        {
            _id: 'southpark',
            name: 'Southpark',
            pic: 'southpark_pic.jpg',
            banner: 'southpark_banner.jpg',
            description: `The cartoon follows the exploits of four boys, Stan Marsh, Kyle Broflovski, Eric Cartman and Kenny McCormick. The boys live in the fictional small town of South Park, located within the real-life South Park basin in the Rocky Mountains of central Colorado.[6] The town is also home to an assortment of frequent characters such as students, families, elementary school staff, and other various residents, who tend to regard South Park as a bland, quiet place to live.[7] Prominent settings on the cartoon include the local elementary school, bus stop, various neighborhoods and the surrounding snowy landscape, actual Colorado landmarks, and the shops and businesses along the town's main street, all of which are based on the appearance of similar locations in Fairplay`,
            link: 'https://en.wikipedia.org/wiki/South_Park',
            tmdb_id: 2190
        },
        {
            _id: 'king_of_the_hill',
            name: 'King of the Hill',
            pic: 'kingofthehill_pic.jpg',
            banner: 'kingofthehill_banner.jpg',
            description: `King of the Hill is set in the fictional suburban'esq town of Arlen, Texas. The cartoon centers around the Hill family, whose head is the ever-responsible, hard-working, loyal, disciplined, and honest Hank Hill (voiced by Mike Judge). The pun title refers to Hank as the head of the family as well as metaphorically to the children's game King of the Hill. Hank is employed as an assistant manager at Strickland Propane, selling "propane and propane accessories". He is very traditional and moral, and he takes exceptionally good care of his dog, Ladybird, which he treats, more often than not, as a member of the family and as a human. Hank is married to Peggy Hill (née Platter) (voiced by Kathy Najimy), a native of Montana, who is a substitute Spanish teacher, although she has little grasp of the language; she has also found employment as a freelance author, Boggle champion, notary public, softball pitcher and real estate agent. Her overconfidence and trusting nature often leads her into getting involved in complex schemes that Peggy doesn't recognize as criminal or irresponsible until it's too late.`,
            link: 'https://en.wikipedia.org/wiki/King_of_the_Hill',
            tmdb_id: 2122
        },
    ]
};

export const simpsonsChars = (cartoonId) => {
    return [
        {
            cartoonId: cartoonId,
            name: 'Homer Simpson',
            info: 'Homer, the father, works as a safety inspector at the Springfield Nuclear Power Plant, a position at odds with his careless, buffoonish personality.',
            pic: 'simpsons_homer.jpg'
        },
        {
            cartoonId: cartoonId,
            name: 'Marge Simpson',
            info: 'Marge Simpson, a stereotypical American housewife and mother.',
            pic: 'simpsons_marge.jpg'
        },
        {
            cartoonId: cartoonId,
            name: 'Bart Simpson',
            info: 'Bart, a ten-year-old troublemaker.',
            pic: 'simpsons_bart.jpg'
        },
        {
            cartoonId: cartoonId,
            name: 'Lisa Simpson',
            info: 'Lisa, a precocious eight-year-old activist.',
            pic: 'simpsons_lisa.jpg'
        },
        {
            cartoonId: cartoonId,
            name: 'Maggie Simpson',
            info: 'Maggie, the baby of the family who rarely speaks, but communicates by sucking on a pacifier.',
            pic: 'simpsons_maggie.jpg'
        }
    ]
}

export const familyguyChars = (cartoonId) => {
    return [
        {
            cartoonId: cartoonId,
            name: 'Peter Griffin',
            info: 'Peter Griffin, a bumbling yet well-intentioned blue-collar worker.',
            pic: 'familyguy_peter.jpg'
        },
        {
            cartoonId: cartoonId,
            name: 'Lois Griffin',
            info: 'Lois, a stay-at-home mother and piano teacher who is a member of the wealthy Pewterschmidt family.',
            pic: 'familyguy_lois.jpg'
        },
        {
            cartoonId: cartoonId,
            name: 'Meg Griffin',
            info: 'Meg, their awkward teenage daughter who is constantly ridiculed and ignored by the family.',
            pic: 'familyguy_meg.jpg'
        },
        {
            cartoonId: cartoonId,
            name: 'Stewie Griffin',
            info: 'Stewie, their diabolical infant son of ambiguous sexual orientation who has adult mannerisms and uses stereotypical archvillain phrases.',
            pic: 'familyguy_stewie.jpg'
        },
        {
            cartoonId: cartoonId,
            name: 'Chris Griffin',
            info: 'Chris, their teenage son, who is overweight, unintelligent and a younger version of his father in many respects.',
            pic: 'familyguy_chris.jpg'
        },
        {
            cartoonId: cartoonId,
            name: 'Brian Griffin',
            info: 'Living with the family is their witty, smoking, martini-swilling, sarcastic, English-speaking anthropomorphic dog Brian, though he is still considered a pet in many respects.',
            pic: 'familyguy_brian.jpg'
        }

    ]
}

export const americandadChars = (cartoonId) => {
    return [
        {
            cartoonId: cartoonId,
            name: 'Stan Smith',
            info: 'Stan Smith is a CIA agent painfully dedicated to homeland security. Stan Smith is the title character on American Dad! who has an exaggeratedly masculine voice and manner about him',
            pic: 'americandad_stan.jpg'
        },
        {
            cartoonId: cartoonId,
            name: 'Francine Smith',
            info: 'Francine Smith is Stans wife and the mother of Steve and Hayley. Indignant, Francine can usually be seen nagging and scolding her family (particularly Stan) over their wrongdoings.',
            pic: 'americandad_francine.jpg'
        },
        {
            cartoonId: cartoonId,
            name: 'Steve Smith',
            info: 'Steven Anita "Steve" Smith is the baby of the family who is Stan and Francines high- school aged son and the brother of Hayley. He attends Pearl Bailey High School.',
            pic: 'americandad_steve.jpg'
        },
        {
            cartoonId: cartoonId,
            name: 'Haylee Smith',
            info: 'Hayley Dreamsmasher Smith-Fischer is Stan and Francines new-age hippie daughter and college- aged oldest and the sister of Steve.',
            pic: 'americandad_haylee.jpg'
        },
        {
            cartoonId: cartoonId,
            name: 'Roger Smith',
            info: 'Roger is the very zany pansexual alien who lives in the Smith familys attic.Blithely so, Roger is depraved, devious, and cruel.He typically exhibits a lighthearted, carefree temperament but while also engaged in his freakish grossness, outrageously malice, and rascally shenanigans.',
            pic: 'americandad_roger.jpg'
        }
    ]
}

export const southparkChars = (cartoonId) => {
    return [
        {
            cartoonId: cartoonId,
            name: 'Eric Cartman',
            info: 'Eric Cartman (usually nicknamed by his surname only) is loud, obnoxious, and amoral, often portrayed as an antagonist.',
            pic: 'southpark_cartman.jpg'
        },
        {
            cartoonId: cartoonId,
            name: 'Kenny McCormick',
            info: 'Kenny, who comes from a poor family, wears his parka hood so tightly that it covers most of his face and muffles his speech.',
            pic: 'southpark_kenny.jpg'
        },
        {
            cartoonId: cartoonId,
            name: 'Kyle Broflovski',
            info: 'Kyle is the lone Jew among the group, and his portrayal in this role is often dealt satirically.',
            pic: 'southpark_kyle.jpg'
        },
        {
            cartoonId: cartoonId,
            name: 'Stan Marsh',
            info: 'Stan is portrayed as the everyman of the group,[8] as the cartoons website describes him as an average, American 4th grader.',
            pic: 'southpark_stan.jpg'
        }
    ]
}

export const kingofthehillChars = (cartoonId) => {
    return [
        {
            cartoonId: cartoonId,
            name: 'Hank Hill',
            info: 'Hank is employed as an assistant manager at Strickland Propane, selling "propane and propane accessories". He is very traditional and moral, and he takes exceptionally good care of his dog, Ladybird, which he treats, more often than not, as a member of the family and as a human.',
            pic: 'kingofthehill_hank.jpg'
        },
        {
            cartoonId: cartoonId,
            name: 'Peggy Hill',
            info: 'Peggy Hill, a native of Montana, who is a substitute Spanish teacher, although she has little grasp of the language; she has also found employment as a freelance author, Boggle champion, notary public, softball pitcher and real estate agent.',
            pic: 'kingofthehill_peggy.jpg'
        },
        {
            cartoonId: cartoonId,
            name: 'Bobby Hill',
            info: 'Bobby Hill, is a husky pre-pubescent boy who is generally friendly and well-liked, but not very bright, and often prone to making bad decisions.',
            pic: 'kingofthehill_bobby.jpg'
        }
    ]
}

export const visitors = () => {
    return [
        {
            visitor: 'visitor-1',
            password: 'v1',
            dateJoined: new Date(2017, 3, 20, 17, 30)
        },
        {
            visitor: 'visitor-2',
            password: 'v2',
            dateJoined: new Date(2017, 3, 20, 17, 30)
        },
        {
            visitor: 'visitor-3',
            password: 'v3',
            dateJoined: new Date(2017, 3, 20, 17, 30)
        },
        {
            visitor: 'visitor-4',
            password: 'v4',
            dateJoined: new Date(2017, 3, 20, 17, 30)
        },
        {
            visitor: 'visitor-5',
            password: 'v5',
            dateJoined: new Date(2017, 3, 20, 17, 30)
        },
        {
            visitor: 'visitor-6',
            password: 'v6',
            dateJoined: new Date(2017, 3, 20, 17, 30)
        },
        {
            visitor: 'visitor-7',
            password: 'v7',
            dateJoined: new Date(2017, 3, 20, 17, 30)
        }
    ];
}

export const comments = () => {
    return [
        {
            dateTime: new Date(2017, 2, 20, 17, 30),
            visitor: 'visitor-1',
            comment: 'A very nice site'
        },
        {
            dateTime: new Date(2017, 2, 22, 7, 30),
            visitor: 'visitor-2',
            comment: 'Wow - It matches my favorites too :-)'
        },
        {
            dateTime: new Date(2017, 2, 22, 9, 30),
            visitor: 'visitor-3',
            comment: 'I do not like cartoons'
        },
        {
            dateTime: new Date(2017, 2, 23, 10, 30),
            visitor: 'visitor-2',
            comment: 'Visitor-3, How can you say that you dont like cartoons ?'
        },
        {
            dateTime: new Date(2017, 2, 24, 18, 40),
            visitor: 'visitor-5',
            comment: 'I like the Tech Stack on which this is built.'
        },
        {
            dateTime: new Date(2017, 2, 25, 11, 35),
            visitor: 'visitor-6',
            comment: 'Uggghhhh ... Get a UX designer !'
        },
        {
            dateTime: new Date(2017, 2, 24, 12, 30),
            visitor: 'visitor-7',
            comment: 'Nice !'
        }
    ];
}
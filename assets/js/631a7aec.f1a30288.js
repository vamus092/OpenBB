"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[35706],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>y});var r=t(67294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function n(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var a=r.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):n(n({},a),e)),t},d=function(e){var a=c(e.components);return r.createElement(l.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},b=r.forwardRef((function(e,a){var t=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(t),b=o,y=p["".concat(l,".").concat(b)]||p[b]||u[b]||s;return t?r.createElement(y,n(n({ref:a},d),{},{components:t})):r.createElement(y,n({ref:a},d))}));function y(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var s=t.length,n=new Array(s);n[0]=b;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[p]="string"==typeof e?e:o,n[1]=i;for(var c=2;c<s;c++)n[c]=t[c];return r.createElement.apply(null,n)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"},88828:(e,a,t)=>{t.d(a,{Z:()=>s});var r=t(67294),o=t(35742);function s(e){let{title:a}=e;return r.createElement(o.Z,null,r.createElement("title",null,a))}},14254:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>b,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var r=t(87462),o=(t(67294),t(3905)),s=t(88828);const n={title:"fp",description:"This content provides a comprehensive guide on utilizing the 'fp' command in retrieving the floor price of a specific NFT collection. Examples of collections include Bored Ape Yacht Club, CryptoPunks, and Cool Cats.",keywords:["NFT","floor price","collection","SLUG","fp","bored-ape-yacht-club","cryptopunks","meebits","veefriends","cool-cats","bored-ape-kennel-club","mekaverse","cryptoblots-art-blocks-curated","loot","uninterested-unicorns","doodles"]},i=void 0,l={unversionedId:"terminal/reference/crypto/nft/fp",id:"terminal/reference/crypto/nft/fp",title:"fp",description:"This content provides a comprehensive guide on utilizing the 'fp' command in retrieving the floor price of a specific NFT collection. Examples of collections include Bored Ape Yacht Club, CryptoPunks, and Cool Cats.",source:"@site/content/terminal/reference/crypto/nft/fp.md",sourceDirName:"terminal/reference/crypto/nft",slug:"/terminal/reference/crypto/nft/fp",permalink:"/terminal/reference/crypto/nft/fp",draft:!1,editUrl:"https://github.com/OpenBB-finance/OpenBBTerminal/edit/main/website/content/terminal/reference/crypto/nft/fp.md",tags:[],version:"current",lastUpdatedBy:"montezdesousa",lastUpdatedAt:1705579840,formattedLastUpdatedAt:"Jan 18, 2024",frontMatter:{title:"fp",description:"This content provides a comprehensive guide on utilizing the 'fp' command in retrieving the floor price of a specific NFT collection. Examples of collections include Bored Ape Yacht Club, CryptoPunks, and Cool Cats.",keywords:["NFT","floor price","collection","SLUG","fp","bored-ape-yacht-club","cryptopunks","meebits","veefriends","cool-cats","bored-ape-kennel-club","mekaverse","cryptoblots-art-blocks-curated","loot","uninterested-unicorns","doodles"]},sidebar:"tutorialSidebar",previous:{title:"collections",permalink:"/terminal/reference/crypto/nft/collections"},next:{title:"stats",permalink:"/terminal/reference/crypto/nft/stats"}},c={},d=[{value:"Usage",id:"usage",level:3},{value:"Parameters",id:"parameters",level:2}],p={toc:d},u="wrapper";function b(e){let{components:a,...t}=e;return(0,o.kt)(u,(0,r.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)(s.Z,{title:"crypto /nft/fp - Reference | OpenBB Terminal Docs",mdxType:"HeadTitle"}),(0,o.kt)("p",null,"Display floor price of a certain NFT collection. ","[Source: https://nftpricefloor.com/]"),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:"wordwrap",wordwrap:!0},"fp -s SLUG\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Optional"),(0,o.kt)("th",{parentName:"tr",align:null},"Choices"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"slug"),(0,o.kt)("td",{parentName:"tr",align:null},"-s  --slug"),(0,o.kt)("td",{parentName:"tr",align:null},"NFT floor price collection slug (e.g., bored-ape-yacht-club)"),(0,o.kt)("td",{parentName:"tr",align:null},"None"),(0,o.kt)("td",{parentName:"tr",align:null},"False"),(0,o.kt)("td",{parentName:"tr",align:null},"mcgoblinwtf, cool-cats, squiggly, official-moar-by-joan-cornella, mfers, ragnarok-meta, akuma-origins, grifters-by-xcopy, meebits, foxfam, tom-sachs-rockets, plasma-bears, forgotten-runes-wizards-cult, eightbitme, gh0stly-gh0sts, singularity-art-blocks-curated, neo-tokyo-identities, veefriends, akutars, renga, unigrids-art-blocks-curated, metahero-universe-generative, the-blocks-of-art-art-blocks-curated, startbucks-holiday-cheer-edition-1-stamp, scribbled-boundaries-art-blocks-curated, geometry-runners-art-blocks-curated, rtfkt-mnlth, aerial-view-art-blocks-curated, algorhythms-art-blocks-curated, algobots-art-blocks-curated, bubble-blobby-art-blocks-curated, joyworld-joys, trossets-art-blocks-curated, autoglyphs, hyperhash-art-blocks-curated, 27-bit-digital-art-blocks-curated, the-potatoz, cryptopunks, 720-minutes-art-blocks-curated, supducks, the-vogu-collective, archetype-art-blocks-curated, metasaurs, apparitions-art-blocks-curated, wicked-craniums, bored-ape-kennel-club, foustlings, shinsei-galverse, dooplicator, milady, mooncats, ecumenopolis-art-blocks-playground, avastars, collectvox, wavyscape-by-holger-lippmann, ether-orcs, bapetaverse-official, shinsekaicorp, starbucks-doing-good-journey-stamp, gevols, wicked-ape-bone-club, starbucks-bean-to-cup-journey-stamp, murakami-flowers, jungle-freaks-by-trosley, v1-cryptopunks-wrapped, the-shiboshis, lostsamurise, voxies, subscapes-art-blocks-curated, chimera-art-blocks-curated, dynamic-slices-art-blocks-curated, pulsquares, poap, wolf-game, Decentraland, pudgy-penguins, 888-inner-circle, chain-runners, the-cryptodads, joy-girls-club, cyberbrokers, chill-frogs, bears-deluxe, starbucks-heritage-journey-stamp, adidas-for-prada, party-ape-billionaire-club, frammenti-art-blocks-curated, jrny-nft-club, neo-tokyo-part-4-land-deeds, deadfellaz, incognito, sappy-seals, etheria, supernormalbyzipcy, nimbuds-art-blocks-curated, asm-aifa-genesis, adidas-virtual-gear-genesis, framergence, space-punks-club, proof-collective, gener8tive-k-compositions, dotdotdots, blitmap, veefriends-series-2, hv-mtl-nft, gen-art-membership, alicia-freeman-designs, enlightenment, the-association-nft, los-muertos-world, adidas-originals-capsule-collection, crypto-bull-society, uninterested-unicorns, sorare, construction-token-art-blocks-curated, factura-by-mathias-isaksen, elevated-deconstructions-art-blocks-curated, cryptoblots-art-blocks-curated, asm-brains, cupcats-official, galaxy-fight-club, loot, purrnelopes-country-club, genesis-art-blocks-curated, beeple-everydays, byopills, renga-black-box, jadu-jetpack, premint-collector-pass, winter-bears, haki-nft, dreams-art-blocks-curated, time-pieces-build-a-better-future, mekaverse, phototaxis-art-blocks-playground, paper-armada-art-blocks-playground, cosmic-reef-art-blocks-curated, we-are-all-going-to-die, quantum-key, the-art-of-seasons, beeple-genesis-collection, the-littles-nft, cryptoskulls, curio-cards, everai-heroes-duo, fluf-world, raidparty-fighters, galaxy-eggs, treeverse, chimpers-nft, 10ktf, spooky-boys-country-club, impostors-genesis-aliens, arcade-land, gutter-dogs, kleee02, digidaigaku, tiny-dinos, doodles, gorilla-nemesis, decentraland_names, meridian-art-blocks-playground, galacticapes, organized-disruption-by-joshua-davis-praystation, passages-by-aaron-penne-x-boreta, sneaky-vampire-syndicate, endless-nameless-art-blocks-curated, anticyclone-art-blocks-curated, punks-comic, ignition-art-blocks-curated, memories-of-qilin-art-blocks-curated, the-alien-secret-society, crypto-cannabis-club, vaynersports-pass-vsp, synapses-art-blocks-curated, furballs, lonely-alien-space-club, pigments-art-blocks-curated, colorspace-art-blocks-curated, smilesssvrs, the-humanoids, wavelength, inspirals-art-blocks-curated, nina-s-super-cool-world, damien-hirst-the-currency, coolmans-universe, thorguards, flux-art-blocks-curated, rhythm-art-blocks-playground, screens-art-blocks-curated, watercolor-dreams-art-blocks-curated, spectron-art-blocks-curated, elementals-art-blocks-curated, killergf, neighborhood-by-jeff-davis, lewitt-generator-generator-by-mitchell-f-chan, tirli, creepz-reptile-armoury, monaco-planet-yacht, neo-tokyo-part-3-item-caches, animetas, creature-world, alien-insects-art-blocks-playground, kiwami-genesis, cryptoadz, onchainmonkey, divine-anarchy, fang-gang, tubby-cats, moonbirds-oddities, al-cabones, the-official-surreals, playboy-rabbitars-official, the-yakuza-cats-society, the-doge-pound, habbo-avatars, stoner-cats, headdao, defy-genesis-masks, bubblegum-kids, cryptocoven, superlative-secret-society, monkey-bet-dao, fidenza-art-blocks-curated, cryptodickbutts, the-alien-boy, 8liens, gutter-rats, 1111-by-kevin-abosch, ape-gang, fusion-by-hideki-tsukamoto, where-my-vans-go, isekai-meta, cryptobatz-by-ozzy-osbourne, phase-art-blocks-curated, lives-of-asuna, rektguy, polygonpunks, cryptoon-goonz, dourdarcels, invisible-friends, io-imaginary-ones, karafuru, peculiar-gang, wizards-dragons-game, the-blitnauts, salt-v4, generativemasks, heaven-computer, gutter-pigeons, realms-for-adventurers, world-of-women, cryptomories, uwucrew, aww-friends, waifusion, otherdeed, the-n-project, cyberkongz-genesis, the-wanderers, timeless-characters, apostles-genesis, satoshibles, crypto-pills-by-micha-klein, azuki, collectvoxmirandus, capsule-house, fluf-world-thingies, genuine-ardvark, lightspeed-lads, fragments-of-an-infinite-field-art-blocks-curated, ancient-courses-of-fictional-rivers-art-blocks-curated, calian-by-eric-de-giuli, gen-3-by-dca, swampverse, neo-tokyo-outer-identities, fomoverse, boki-nft, hapeprime, phantabear, goatz, fast-food-punks, song-a-day, muri-haus, gazers, the-minds-eye, deafbeef, sipherian-surge, prime-ape-planet-pap, the-saudis-nft, color-study-art-blocks-playground, cryptocubes, bored-mummy-waking-up, ack-unique-editions, podgans-braindrops, solos, anonymice-breeding, dino-pals-art-blocks-factory, portal-art-blocks-playground, bastard-gan-punks-v2, adidas-originals-into-the-metaverse-phase-1-and-2, solvency, corruption-s, creepz-shapeshifterz, derace-horses, 0n1-force, mr-crypto-by-racksmafia, animonkeys, avatar-rock-out, the-senses, merge-regenesis, rojom, drip-squad, crypto-unicorns, mlb-champions, bored-ape-yacht-club, lazy-lions, first-first-nfts, og-crystals, wonderpals, world-of-women-galaxy, otherside-koda, proof-moonbirds, apes-in-space, angry-ape-army, adidas-wagmi-united, rumble-kong-league, natsukashii, eulerbeats-genesis-original, wearing-your-emotion, imaginatation-station, spooky-season-poieeeyee, conall-in-space, yolo-holiday, cryptotrunks, the_sandbox, bald-tuesdays, cute-snacks, nouns, all-ai-art-looks-the-same-by-various-artists, treasure-of-ophiel, revenants-by-alethea-ai, party-degenerates, ainightbirds, entretiempos-art-blocks-curated, letswalk, the-eternal-pump, chumbi-valley, metahero-universe-core-identities, para-bellum-art-blocks-curated, obits, alien-clock-art-blocks-playground, dapper-dinos-nft, decentraland_wearables, koin-games-dev-squad, inft-personality-pod-by-alethea-ai, cyberkongz-vx, rug-radio-genesis-nft, loomlocknft, shitbeast, meme-team, shanghai-capella, celestial-assembly, gettin-groovy, skulptuur-art-blocks-curated, creatures-of-the-nighties, earth-to-planet, max-pain-and-frens-by-xcopy, 5-boro-bodega, edifice, fomo-dog-club, vortex, mutant-cats, bored_ape_chemistry_club, zombieclub-token, adam-bomb-squad, avidlines, ghostsproject, puzzled-panther, protectors-of-the-forest, cute-cool-and-creepy, mutant-garden-seeder, the-singularity, koala-intelligence-agency, anonymice, bulls-on-the-block, inspirati4n-by-refik-anadol, smallbros, yatc-you-are-the-champion, rareapepeyachtclub, the_sandbox_assets, royal-society-of-players, ceramics-by-charlotte-dann, quantum-memories-noise-by-refik-anadol, crypto-stamp, nftrees, dead-ringers-edition-by-dmitri-cherniak, hausphases, beeple-spring-summer-collection, deez-nuts, lacoste-undw3-genesis-pass-nft, merge, slotie-nft, deadheads, robotos, matr1x-2061, doodle-collection, i-quit-my-job-to-be-an-artist, stepn-shoeboxes, pepe-open-editions-by-matt-furie, ringers-art-blocks-curated, bent, autology, ether-cards-founder, smowl, lofipepe, magic-of-the-woods, bodegacatceo, rituals, zeeverse-masks-genesis, the-fatty-bagz, old-school-cool, tandizojere, elemental-creation-the-artistic-journey-by-charles, genesis-braindrops, nike-our-force-1-box, impact-theory-founders-key, boss-beauties, clonex, fewocious-x-rtfkt, fvck-crystal, lil-heroes-by-edgar-plans, worldwide-webb-land, meta-legends, nifty-league-degens, pegz, aylia, the-butterfly-garden, notbanksyechoes, canetoonist, metalands-by-daniel-greenwood, nft-worlds, neo-tokyo-part-2-vault-cards, chainfaces, zed-run-official, chromie-squiggle-art-blocks-curated, rarepepe-by-matt-furie, cryptoarte, lobsterdao, creatures-without-pants, backed-goods-&-evils, desperate-ape-wives, llamaverse-genesis, growl-gang, exosama-expect-chaos, qql-mint-pass, peaceful-groupies, the-sevens, cryptovoxels, oana193, bulls-and-apes-genesis, substantial-law-910, parallel-alpha, century-2052-by-casey-reas, godsremix, genuine-undead-nft, bullsandapes-apes, baby-doge-army, pixelady-maker, drag-queens-of-big-gay-baby, automatism-art-blocks-factory, boonji-project, laura-dumitriu, dystopunks, hedz-by-matt-furie, mind-the-gap-by-mountvitruvius, century-art-blocks-curated, looki, 0xMons, glitch-crystal-monsters-art-blocks-curated, beeple-5000-days-collection, worst-twitch-ever, rare-pepe-curated, wow-capacitors, sidus-nft-heroes, beanz-official, alts-by-adidas, gambling-apes, plasticity-by-p4stoboy, fake-internet-money-by-steve-pikelny, hoppy-doodle, avire-nft, goop-troop, raunchy-rancor, genesis-creepz-by-overlord, yayo-nft, cyberkongz-babies, fewoworld-paint-nft, ape-kids-club, rtfkt-x-rimowa, game-of-thrones-nft-the-north-series-1-avatars, mask-world-nft, eando9745, catharsis-by-dario-lanza, youtherealmvp, montreal-friend-scale-by-amon-tobin, bites-of-brazil, cerebellum-by-laya-mathikshara-santiago, nike-rtfkt-cryptokicks-dunk-genesis, art-gobblers, rinascita, koripo-by-rich-poole, cargo-by-kim-asendorf, colorglyphs, alan-ki-aankhen-by-fahad-karim, running-moon-by-licia-he, materia-mania-by-huemin, the-beautiful-paintings-by-damien-hirst, chronophotograph-by-deafbeef, orbifold-by-kjetil-golid, polychrome-music-by-rafael-rozendaal-danny-wolfers, alienfrensnft, fake-it-till-you-make-it-by-maya-man, 3landers, nike-monolith, decentraleyesmashup-by-coldie, metroverse-genesis, crypto-citizens-official, raster-by-itsgalo, game-of-thrones-the-north-series-1-hero-box, open-edition-by-kevin-abosch, memories-of-digital-data-by-kazuhiro-tanimoto, solar-transits-by-robert-hodgin, cool-pets-nft, nike-ar-hoodie-rtfkt, illuminati-nft, psychedelics-anonymous-genesis, wolf-game-land, act-of-emotion-by-kelly-milligan, kaiju-kingz, metropolis-by-mpkoz, crypto-chicks, return-by-aaron-penne, fontana-by-harvey-rayner-patterndotco, byovape, chimerical-stories-by-entangled-others, valhalla, goblintownwtf, ephemeros-by-boreta, jiometory-no-compute-art-blocks-curated, tide-predictor-by-lovid, wolf-game-farmer, ledger-market-pass-genesis-edition, broadside, obicera-by-alexis-andre, gen-2-by-dca, rstlss-claire-silver, sys32template, pre-process-by-casey-reas, cometh-spaceships-nft, dipolar-by-junia-farquhar, ori-by-james-merrill-1, still-moving-by-nathaniel-stern-and-sasha-stiles, sights-by-artemis, remilio-babies, fake-feelings-by-dadabots-x-silverstein, the-field-by-beervangeer, fancy-bears, the-harvest-by-per-kristian-stoveland, vv-checks-originals, radarscope-by-holger-lippmann, human-unreadable-by-operator, dream-capsules-by-obvious, clipmatrix-creatures-by-nikolay-jetchev, dubbl3bee, traitors-open-edition-by-xcopy, mutant-ape-yacht-club, mimic-shhans, right-click-share-by-xcopy, fmarxy, goonsofbalatroon, cool-cats-football-club, doge-pound-puppies, messengers-by-alexis-andre, metabillionaire, gutter-cat-gang, wolf-game-wool-pouch, letters-to-my-future-self-by-ryan-struhl, akumu-dragonz, primitives-by-aranda-lasch, kpr-keepers-nft, sail-o-bots-art-blocks-factory, rapture-by-thomas-lin-pedersen, nondescriptives-by-ivona-tau, sudfah-by-melissa-wiederrecht, deyes-ascended-collection-coldie, teopema-by-vadim-epstein-x-coh, ethermore, reverse-zoology-by-ellie-pritts, hashmasks, elements-by-atnpassion, ai-art-is-not-art-claire-silver, sewer-pass-nft, grailers-dao, feetpix-wtf, non-living-by-gabriel-massan, porsche-911-nft, toshies-nft, wall-by-kevin-abosch, nftiff, minipods-by-van-arman-x-mindshift-x-ricky, c-01-official-collection-nft, the187-nft, brise-soleil-by-jorge-ledezma, checks-vv-edition, joyworld-joytoys, light-years-by-dmitri-cherniak, skinvial-evox-nft, nessgraphics, qql, synthetic-dreams-by-refik-anadol, sublimata-by-kevin-abosch, opepen-edition-nft, rtfkt-capsule-space-drip-1-2, reflection-by-jeff-davis, life-in-west-america-by-roope-rainisto, trump-nft-digital-trading-cards, coldie-warren-buffett-decentral-eyes, gutter-clones, rtfkt-capsule-space-drip, byokey, byoland, joyworld-joysmilies, brain-loops-by-gene-kogan, incomplete-control-by-tyler-hobbs, dreamscapes-by-xander-steenbrugge, 10ktf-stockroom, space-drip-forging-rtfkt-space-drip-x-nike-air-force-1, confluence-by-devi-parikh, bonkler-nft, revv-racing-collection, byocraft, revv-motorsport, deep-journeys-by-heavens-last-angel, 100-print-by-ben-kovach, apollo-by-asaf-slook, balagan-by-sapir-cohen, lil-nouns, super-puma, grumpls-nft, lacoste-undw3-the-emerge-nft, fake-news-by-coldie, thecaptainz, gutter-juice, nakamigos, sun-signals-by-kevin-abosch, blvckgenesis, mv3-nft, kanpai-pandas, rtfkt-egg-animus, friendship-bracelets-by-alexis-andre, mutant-hound-collars, fini-world, cockpunch-nft, 3d-invisible-friends, the-memes-by-6529, stellaraum-by-alida-sun, asemica, lil-pudgys, inflection-by-jeff-davis, machine-hallucinations-refik-anadol, parnassus-by-mpkoz, otherdeed-expanded, otherside-vessels, pudgy-rods, degentoonz-collection, lux-by-jason-ting, degods, the-nursery-by-sputniko, network-c-by-casey-reas, formation-by-jeff-davis, f1-delta-time, kernels-by-julian-hespenheide, orchids-by-luke-shannon, folio-by-matt-deslauriers, torque-squad, wirwar-by-bart-simons, genesis-mana-for-loot, memory-box-editions-by-deafbeef, benji-bananas-membership-pass, the-painted-banners-for-adventurers, every-icon, crypts-and-caverns-nft, out-game-flowers-small-bouquets, sentimentite-by-agnieszka-kurant, bitchcoin, petro-national-art-blocks-collaborations, robness-prints, robness-cyberpopgallery, genesis-adventurers-for-loot, translucent-panes-by-fingacode, rings-for-loot, terraforms-by-mathcastles, underwater-by-monica-rizzolli, notable-pepes, creepz-invasion-pass, mgland, creepz-mega-shapeshifterz, creepz-loomi-vault, mocaverse, ghost-boy-lives, momoguro-holoself, infinito-by-stefano-contiero, killabears, owls-wtf, createra-genesis-land, gitcoin-presents, payphone-deafbeef, degenerative-deafbeef, bricktopians-by-law-degree, the-starbucks-siren-collection, bosque-de-chapultepec-by-daniel-calderon-arenas, rubicon-by-mario-carrillo, tosolaris-by-iskra-velitchkova, glaciations-by-anna-lucia, the-weirdo-ghost-gang, intricada-by-camille-roux, sunset-from-the-bluffs-by-nat-sarkissian, a-kid-called-beast, cage-by-john-provencher, mechminds, talisman-paper-of-yama, live-like-a-cat-nekonoyouniikiru, cryptoninja-partners, lumen-by-p1xelfool, 100-untitled-spaces-by-snowfro, pixelmon-generation-1, gemesis, 1935-by-william-mapan, doodles-genesis-box, color-streams-by-r4v3n, great-expectations-by-damien-hirst, aopanda-party, cnp-makimono, trait-sniper-lifetime-access, kaleidoscope-by-loren-bednar, caminos-by-juan-rodriguez-garcia, dendekaden, nth-culture-by-fingacode, limn-by-ralenarc, velum-by-harvey-rayner-patterndotco, lo-que-no-esta-by-marcelo-soria-rodriguez, inprecision-by-thomas-lin-pedersen, 100-sunsets-by-zach-lieberman, y00ts, off-script-by-emily-xie, awkward-astronauts-by-lambo, the-anata-nft, peopleintheplacetheylove, xana-penpenz-cryptoninja, xanaland, 8sian-main-collection, 10ktf-gucci-grail, fullsend-metacard-nft, talking-heads-coldie, tasty-bones-xyz, transcendence-by-jeff-davis, miladybitch-nft, pohualli-by-fahad-karim, banners-nft, maschine-by-harm-van-den-dorpel, adidas-x-fewocious-trefoil-flower-mint-pass, fewoworld-canvas, boringpunksnft, ethscriptions, fewocious-complexcon, trump-digital-trading-cards-series-2, fluf-world-burrows, guttermelo, azuki-elemental-beans, partybear, fluf-world-buzzies, fluf-world-scenes-and-sounds, fluf-world-eggs, undeads-mystery-box, ether-capsule, forgotten-souls, undeads-potions, big-inc, the-llamas-curve, undeadszombies, forgotten-runes-infinity-veil, azuki-elementals, forgotten-runes-ponies, nightmareimpstreatboxes, eulerbeatsfutura, forgotten-runes-beast-spawn, forgotten-runes-athenaeum, forgotten-runes-warriors-guild, mythics-egg, sproto-gremlins, vera-molnar-themes-and-variations, eulerbeats-wearables, based-ghouls-nft, veefriends-iconics, muhammad-ali-thenextlegends-boxers, atem-cards, muhammad-ali-thenextlegends-gym-bags, asm-aifa-all-stars, dr-grordborts-rayguns, kanpai-pandas-infinity-collection, 10ktf-combat-gear, quadrature-by-darien-brito, chainfaces-arena, yue-minjun-boundless, asm-gen-ii-brains, skulls-of-luci, 10ktf-kagami, moonbirds-mythics, 10ktf-combat-crates, rtfkt-exodus-pods, the-seekers, spaghetti-bones-by-joshua-bagley, neural-sediments-by-eko33, dopamine-machines-by-steve-pikelny, gumbo-by-mathias-isaksen, winds-of-yawanawa, zuckbots, hytopia-genesis-avatars, zuckcorp-items, town-star, vox-dreamworks-trolls, my-pet-hooligan, vox-the-walking-dead, raidparty-heroes, oxya-land-plots, oxya-origin-project, vox-box, inhabitants-united-planets, the-watch-com, velocity-pass, oxya-origin-colonies, mappings-by-ira-greenberg, wreck-league-majestics, luci-chapter-5-the-monument-game, wreck-league-boosters, machine-hallucinations-nyc-by-refik-anadol, the-spaces-between-words-by-kaliyuga, azragames-thehopeful, dominoes-in-fluxus-by-ivona-tau, uptrip-nft-cards, checks-vv-elements, nakamigos-cloaks, sugartown-oras, linksdao, nouns-forked, growing-up-im-scared-by-fewocious, fewoworld-fewos, otherside-mara, block-games-dice, mittaria-genesis, 10ktf-g-tags, otherside-relics, beef-brothko, the-next-100-years-of-gucci, pxn-ghost-division, supergucci, the-fungible-by-pak, adidas-x-dearnostalgia-soles-souls-seoul, lostpoets, adidas-golden-ticket, the-collision-pak-trevor-jones, rift-valley-motel-coin, narcissus-by-pak, adidas-moncler-the-explorer, adidas-bape-fresh-forum-digital-twin, adidas-x-monkeemoto-moto-x-decos, mike-fogg-x-adidas-splash-down, rstlss-the-key, rarepass-genesis, flower-jet-coin, geisai-22-classic-official-nft, murakami-lucky-cat-coin-bank-feeding-game-winners, murakami-flowers-coin, geisai-2022-official-nft, decagon-by-golid-and-deca, contractual-obligations-by-matt-kane, rstlss-cryptoadz, murakami-lucky-cat-coin-bank, pirate-nation-founders-pirates, deekay-edition, strands-of-solitude-by-william-mapan, kith-friends, the-wrapture-by-dmitri-cherniak, the-empresses-by-damien-hirst, murakami-lucky-cat-coin-bank-feeding-game, everyday-artifacts-by-beeple, niftydudes, right-place-right-time-bitcoin-volatility-art, study-for-unsupervised-by-refik-anadol, unsupervised-burned-machine-hallucinations-moma, end-of-sartoshi, adidas-blue-pass, y00ts-ethereum, multitudes-by-matt-kane, twelve-checks, distance-by-william-mapan-lacma, sketchbook-a-by-william-mapan, CryptoKitties, nike-our-force-1-poster, velocity-series-by-snowfro, remnants-by-xcopy, neo-tokyo-champion-chips, algo-bro-by-xcopy, our-force-1, decal-by-xcopy, cryptotitties, neotokyo-citizens, arcus-by-rik-oostenbroek, momentum-by-rik-oostenbroek, swoosh-id, michelin-3xplorer-club, milk-and-cookies-by-matt-kane, kamagang, echo-of-intensity-by-per-kristian-stoveland-nft, the-grapes-nft, skyborne-genesis-immortals, l3e7-worlds, delabsadventurepass, chronoforge-nft, skyborne-nexiangems, parallel-avatars, warothys, neotokyo-outer-citizens, trademark-by-jack-butcher, osf-red-lite-district-nft, pursuit-by-per-kristian-stoveland-nft, super-yeti, fortune-founder-s-key-by-aofverse, neon-district, signature-by-jack-butcher, neo-tokyo-outer-land-deeds, san-frantokyo-genesis-pass, buterin-cards, yogapetz, shrapnel-operators-collection, seedworld-vanguards, the-mounts-of-seedworld, bytegans, membership-s-by-not-a-hotel, trainers-generation-1-by-pixelmon, matr1x-kuku, pixels-farm-land, trump-digital-trading-cards-mugshot-edition, ethlizards, damage-control-xcopy, ethlizards-genesis, ultiverse-electric-sheep, valeria-founders-set, champions-of-valeria, land-of-valeria, fifa-plus-collect, big-poppa-collection, virtual-g-shock-vga-002, the-warlords-of-champions-tactics, virtual-g-shock-vga-001, metahero-dots, sipherian-flash, overworld-incarna, ocm-karma-monkey, quirkies-originals, planet-pass-by-wanderers, wandernauts, oh-ottie, ins-20, ocm-dessert, wanderers-ram-beta-bundle, planet-xolo-villagers, gangster-all-star-bosses, evolution-gangsters-gas, poglin-nycra, wade-friends-family, aod-dinosty, torrent-by-jeres, tinfun-nft, mavia-land")))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/43375532/186253073-e50643be-391f-4aa4-949b-946b2d000f38.png",alt:"fp command"})),(0,o.kt)("hr",null))}b.isMDXComponent=!0}}]);
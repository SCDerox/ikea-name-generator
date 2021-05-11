const nlp = require('nlp_compromise');
const nlpSyllables = require('nlp-syllables');

// From https://namingschemes.com/Ikea_Product_Names
const inputdata = 'ABSORB (leathercare set)\n' +
    'ABSORB (leathercleaner)\n' +
    'ADMETE RUND (chair pad)\n' +
    'ADMETE (chair pad)\n' +
    'ADMETE (dish towel)\n' +
    'ÅDUM (rug)\n' +
    'AGAM (junior chair)\n' +
    'AGEN (children\'s armchair)\n' +
    'AGEN (series)\n' +
    'AGNARYD (picture)\n' +
    'AGNE (bar stool)\n' +
    'AGNE (stool)\n' +
    'AINA (cushion cover)\n' +
    'AINA (pair of curtains)\n' +
    'AKURUM (wall top cabinet frame)\n' +
    'AKURUM/RATIONELL (system)\n' +
    'AKUT (3-piece kitchen utensil set)\n' +
    'ALÄNG (floor lamp)\n' +
    'ALÄNG (table lamp)\n' +
    'ALARM (alarm clock)\n' +
    'ALEX (drawer unit on casters)\n' +
    'ALG (mirror)\n' +
    'ALKALISK (alkaline battery)\n' +
    'ALLAMÅLA (magazine rack)\n' +
    'ALLAMÅLA (wall basket)\n' +
    'ÄLMHULT (mug)\n' +
    'ALSEDA (stool)\n' +
    'ALSTER (2-piece salad server set)\n' +
    'ALSVIK (single lever kitchen faucet)\n' +
    'ALVE (add-on-unit for secretary)\n' +
    'ALVE (bookcase with drawer)\n' +
    'ALVE (cabinet with doors)\n' +
    'ALVE (corner workstation)\n' +
    'ALVE (desk)\n' +
    'ALVE (drawer unit)\n' +
    'ALVE (laptop table)\n' +
    'ALVE (secretary)\n' +
    'ALVE (storage bench)\n' +
    'ALVINE PÄRLA (shade)\n' +
    'ALVINE TRÅD (shade)\n' +
    'ALVINE (bedspread)\n' +
    'ALVINE (collection)\n' +
    'ALVINE (series)\n' +
    'AMALIA (chair cushion)\n' +
    'AMMERÖ (series)\n' +
    'AMORF FROST (window decoration)\n' +
    'ÄMTEN (cleaning agent)\n' +
    'ANDREA SATIN (duvet cover and pillowsham(s))\n' +
    'ANDREA ( low pile)\n' +
    'ANDRUP ( flatwoven)\n' +
    'ANDY (drawer unit on casters)\n' +
    'ANEBODA (series)\n' +
    'ÅNES (4-drawer chest)\n' +
    'ÅNES (chest with 2 drawers)\n' +
    'ÅNES (mirror)\n' +
    'ANITA (pair of curtains with tie-backs)\n' +
    'ÅNN (bath faucet with strainer)\n' +
    'ÅNN (sink)\n' +
    'ANNAMOA (fabric)\n' +
    'ANNO AMORF (panel curtain)\n' +
    'ANNO INEZ (panel curtain)\n' +
    'ANNO LJUV (panel curtain)\n' +
    'ANNO SANELA (panel curtain)\n' +
    'ANNO STRÅ (panel curtain)\n' +
    'ANNO TUPPLUR (panel curtain)\n' +
    'ANNO UNNI (panel curtain)\n' +
    'ANNO VACKER (panel curtain)\n' +
    'ANNONS (5-piece cookware set)\n' +
    'ANORDNA LYX (pull-out storage unit)\n' +
    'ANORDNA LYX (storage unit)\n' +
    'ANORDNA MEST (pull-out storage unit)\n' +
    'ANORDNA MEST (storage unit)\n' +
    'ANRIK (coffee/tea maker)\n' +
    'ANSLUTA (intermediate connection cord)\n' +
    'ANSLUTA (power supply cord)\n' +
    'ANSLUTA (power supply cord 6-way)\n' +
    'ANTEN (scale)\n' +
    'ANTIFONI (floor/reading lamp)\n' +
    'ANTIFONI (work lamp)\n' +
    'ANTIK (handle)\n' +
    'ANTIK (knob)\n' +
    'ANTILOP (highchair tray)\n' +
    'ANTILOP (highchair with safety belt)\n' +
    'ANTILOP (wall mount changing table)\n' +
    'ANTONIUS (drying rack)\n' +
    'ANTONIUS (foldable drying rack)\n' +
    'ANTONIUS (height adjustable clothes dryer)\n' +
    'ANTONIUS (laundry bag with stand)\n' +
    'ANTONIUS (shelf)\n' +
    'ANTONIUS (system)\n' +
    'APA (storage box)\n' +
    'APELSKÄR (sink faucet with strainer)\n' +
    'ÄPPELVINÄGER MED LINGON (apple vinegar with lingonberries)\n' +
    'ÄPPLARÖ (outdoor furniture)\n' +
    'ARHOLMA (series)\n' +
    'ÅRLIG (plant pot)\n' +
    'ARRAK (plant pot)\n' +
    'ÅRSTID (series)\n' +
    'ARV (plate)\n' +
    'ARV (series)\n' +
    'ARVINN (folding chair)\n' +
    'ÅRYD (series)\n' +
    'ÅRYD (tealight holder)\n' +
    'ÅSELE (shade)\n' +
    'ÅSELE (table lamp)\n' +
    'ASKER (series)\n' +
    'ASPEKT (knife sharpener)\n' +
    'ASPELUND (series)\n' +
    'ASPVIK (series)\n' +
    'ÅSUNDEN (basket with lid)\n' +
    'ÅSUNDEN (basket with lid)\n' +
    'ÅSUNDEN (basket)\n' +
    'ATLANT (waste strainer)\n' +
    'ÄTRAN (lockable cabinet)\n' +
    'ÄTRAN (wall cabinet)\n' +
    'ATTEST (handle)\n' +
    'ATTEST (knob)\n' +
    'ATTITYD (drawer unit)\n' +
    'ATTITYD (wall cabinet)\n' +
    'BÅDALEN (wall-mounted headboard)\n' +
    'BAGIS (children\'s coat-hanger)\n' +
    'BALSER (chair)\n' +
    'BÄRBAR (tray)\n' +
    'BAREN (glass shelf)\n' +
    'BAREN (hanger)\n' +
    'BAREN (toilet brush)\n' +
    'BAREN (toilet roll holder)\n' +
    'BAREN (towel holder)\n' +
    'BAREN (towel rail)\n' +
    'BARNSLIG RINGDANS (box with lid)\n' +
    'BARNSLIG (mirror)\n' +
    'BARNSLIG (place mat)\n' +
    'BARNSLIG (series)\n' +
    'BARNSLIG (textiles)\n' +
    'BAROMETER (series)\n' +
    'BASISK (series)\n' +
    'BASISK (wall/clamp spotlight)\n' +
    'BÄSTIS (lint roller refill)\n' +
    'BEATA BLAD (duvet cover and pillowcase(s))\n' +
    'BEATA ORKIDE (duvet cover and pillowcase(s))\n' +
    'BEATA (collection)\n' +
    'BEDDINGE (cushion cover)\n' +
    'BEDDINGE (series)\n' +
    'BEHANDLA (beeswax polish)\n' +
    'BEHANDLA (series)\n' +
    'BEHÖVD (vacuum flask)\n' +
    'BEKVÄM (kitchen cart)\n' +
    'BEKVÄM (spice rack)\n' +
    'BEKVÄM (step stool)\n' +
    'BENNO (series)\n' +
    'BERIT (fabric)\n' +
    'BERLEVÅG (mirror)\n' +
    'BERLEVÅG (table mirror)\n' +
    'BERNHARD (chair)\n' +
    'BERTA RAND (fabric)\n' +
    'BERTA RUTA (fabric)\n' +
    'BERTIL (chair)\n' +
    'BERYLL (quad spotlight)\n' +
    'BERYLL (wall spotlight)\n' +
    'BESKÅDA (curtain rod set)\n' +
    'BESKÅDA (double wall hardware)\n' +
    'BESTÅ ÅDAL TV (unit)\n' +
    'BESTÅ BOÅS TV (storage unit)\n' +
    'BESTÅ BURS TV (unit)\n' +
    'BESTÅ BURS TV (storage combination)\n' +
    'BESTÅ BURS (desk)\n' +
    'BESTÅ BURS (wall shelf)\n' +
    'BESTÅ JÄGRA TV (unit with casters)\n' +
    'BESTÅ TV (storage combo with sliding doors)\n' +
    'BESTÅ TV (unit)\n' +
    'BESTÅ TV (storage combination)\n' +
    'BESTÅ (shelf unit)\n' +
    'BESTÅ (shelf unit/height extension unit)\n' +
    'BESTÅ (storage combination)\n' +
    'BESTÅ/FRAMSTÅ/INREDA (storage system)\n' +
    'BEVARA (sealing clip)\n' +
    'BIBBI SNURR (duvet cover and pillowcase(s))\n' +
    'BIGARRÅ (series)\n' +
    'BILAR (cars)\n' +
    'BILD (poster)\n' +
    'BILLSTA (series)\n' +
    'BILLY (bookcase)\n' +
    'BILLY (system)\n' +
    'BIRGIT LANTLIG (duvet cover and pillowcase(s))\n' +
    'BIRGIT SPETS (duvet cover and pillowcase(s))\n' +
    'BIRGIT (collection)\n' +
    'BIRGIT (duvet cover and pillowcase(s))\n' +
    'BIRKELAND (series)\n' +
    'BISSA (shoe cabinet with 2 compartments)\n' +
    'BITIG (clock with noticeboard)\n' +
    'BJÄRNUM (folding hook)\n' +
    'BJÄRNUM (hat/shoe rack)\n' +
    'BJÄRNUM (hook)\n' +
    'BJOA (mirror)\n' +
    'BJÖRKEFALL (block candle holder)\n' +
    'BJÖRKEFALL (candlestick)\n' +
    'BJÖRKEN (mirror cabinet)\n' +
    'BJÖRKEN (wall cabinet)\n' +
    'BJÖRKUDDEN (bar table)\n' +
    'BJÖRKUDDEN (dining table)\n' +
    'BJÖRKUDDEN/BERTIL (table and 4 chairs)\n' +
    'BJURÖN (plant glide)\n' +
    'BJURÖN (plant pot)\n' +
    'BJURÖN (plant stand)\n' +
    'BJURSTA (bar table)\n' +
    'BJURSTA (bench)\n' +
    'BJURSTA (series)\n' +
    'BLADET (series)\n' +
    'BLADET (vase)\n' +
    'BLADHULT (series)\n' +
    'BLADIS (series)\n' +
    'BLÅMES (highchair with tray)\n' +
    'BLANDA BLANK (bowl)\n' +
    'BLANDA (series)\n' +
    'BLANDA (serving bowl)\n' +
    'BLANKEN (series)\n' +
    'BLÅSIPPA (duvet cover and pillowcase(s))\n' +
    'BLASKA (broom)\n' +
    'BLASKA (dust pan and brush)\n' +
    'BLASKA (laundry basket)\n' +
    'BLASKA (window squeegee)\n' +
    'BLECKA (hook)\n' +
    'BLIXT (recessed spotlight)\n' +
    'BLOMMIG (vase)\n' +
    'BLOMSTER (candlestick)\n' +
    'BLOMSTER (series)\n' +
    'BLOMSTER (vase)\n' +
    'BLOSSANDE (coffee accessories)\n' +
    'BLOSSANDE (tea accessories)\n' +
    'BOALT CD (rack for 35 CDs)\n' +
    'BOALT DVD (rack for 29 DVDs)\n' +
    'BOASJÖ (5-piece bathroom set)\n' +
    'BOHOLMEN (1 1/2 bowl inset sink with drainer)\n' +
    'BOHOLMEN (1 bowl inset sink with drainer)\n' +
    'BOHOLMEN (2 bowl inset sink with drainer)\n' +
    'BOHOLMEN (chopping board)\n' +
    'BOHOLMEN (colander)\n' +
    'BOHOLMEN (cover plate)\n' +
    'BOHOLMEN (dish drainer)\n' +
    'BOHOLMEN (double-bowl inset sink)\n' +
    'BOHOLMEN (inset sink 1 1/2 bowl)\n' +
    'BOHOLMEN (rinsing tub)\n' +
    'BOHOLMEN (single-bowl inset sink)\n' +
    'BÖJA (series)\n' +
    'BOJNE (chair with armrests)\n' +
    'BOLIDEN (chair and footstool)\n' +
    'BOLMEN (series)\n' +
    'BÖLSNÄS (basket)\n' +
    'BOMULL (fabric)\n' +
    'BOMULL (pair of curtains with tie-backs)\n' +
    'BOMULL (rug)\n' +
    'BONDIS (wall clock)\n' +
    'BONETT (bevel-edged mirror)\n' +
    'BONSAI CARMONA (potted plant)\n' +
    'BOREN (wall edging strip)\n' +
    'BÖRJE (chair)\n' +
    'BORRBY (lantern for block candle)\n' +
    'BORRIS (door mat)\n' +
    'BOSSE (bar stool)\n' +
    'BOSSE (stool)\n' +
    'BOTNE (wardrobe)\n' +
    'BRÄDA (series)\n' +
    'BRALLIS (clothes-hanger)\n' +
    'BRANÄS (basket)\n' +
    'BRAVERA (frying pan)\n' +
    'BRAVUR (wall clock)\n' +
    'BREDGRUND (shower curtain)\n' +
    'BREDSKÄR (single-bowl inset sink)\n' +
    'BRIMNES (series)\n' +
    'BRIMNES (wall cabinet with sliding door)\n' +
    'BRITTEN DÖRR (fabric)\n' +
    'BRITTEN HUS (fabric)\n' +
    'BRITTEN NUMMER (fabric)\n' +
    'BRITTEN STUGA (fabric)\n' +
    'BRODER (system)\n' +
    'BRUNKRISSLA (duvet cover and pillowcase(s))\n' +
    'BRYGGKAFFE MELLANROST (ground coffee medium roast)\n' +
    'BRYGGKAFFE MÖRKROST (ground coffee dark roast)\n' +
    'BRYNE (net)\n' +
    'BSORB (bycast leather cleaner)\n' +
    'BULLAR (baking pan)\n' +
    'BULLAR (loaf pan)\n' +
    'BULLAREN (5-piece bathroom furniture set)\n' +
    'BUMERANG (curved clothes hanger)\n' +
    'BUMERANG (series)\n' +
    'BURKEN (jar with lid)\n' +
    'BURSJÖN (stool with storage)\n' +
    'BYGEL (container)\n' +
    'BYGEL (dish drainer)\n' +
    'BYGEL (magnetic knife rack)\n' +
    'BYGEL (rail)\n' +
    'BYGEL (s-hook)\n' +
    'BYGEL (series)\n' +
    'BYGEL (wire basket)\n' +
    'BYGGA (construction set)\n' +
    'BYHOLMA (chair)\n' +
    'BYHOLMA (series)\n' +
    'CALYPSO (ceiling lamp)\n' +
    'CAPITA (bracket)\n' +
    'CECILIA (fabric)\n' +
    'CELEBER (jar with lid)\n' +
    'CELEBER (series)\n' +
    'CENTRERA LYKTA (lantern)\n' +
    'CHARLOTTA BLOCK (fabric)\n' +
    'CHARLOTTA HIMMEL (fabric)\n' +
    'CHARLOTTA MÄRKE (fabric)\n' +
    'CHARLOTTA TECKNING (fabric)\n' +
    'CHARLOTTA VILD (fabric)\n' +
    'CHARM (egg slicer)\n' +
    'CHARMIG (20-piece cutlery set)\n' +
    'CHARMÖR (bowl)\n' +
    'CHARMÖR (series)\n' +
    'CHOSIGT (funnel)\n' +
    'CHOSIGT (grater with container)\n' +
    'CHRISTEL (cushion)\n' +
    'CHRYSALIDOCARPUS LUTESCENS (potted plant)\n' +
    'CILLA (chair pad)\n' +
    'CLIPS (frame with clips)\n' +
    'CYLINDER (series)\n' +
    'DAGLILJA (bedspread/blanket)\n' +
    'DAIM MINI (milk chocolate with caramel)\n' +
    'DALFRED (bar stool)\n' +
    'DÄMPA (curtain rod set)\n' +
    'DÄNKA (ironing board)\n' +
    'DATA (series)\n' +
    'DÅTID (series)\n' +
    'DAVE (laptop table)\n' +
    'DAVE (laptop workstation)\n' +
    'DEGERNES (underbed storage box)\n' +
    'DEKA (curtain wire incl. clips)\n' +
    'DEKAD (alarm clock)\n' +
    'DEKAD (wall clock)\n' +
    'DELIKAT (series)\n' +
    'DESSERT (measuring cups)\n' +
    'DESSERT (measuring spoons)\n' +
    'DETOLF (glass-door cabinet)\n' +
    'DIGNITET (corner piece)\n' +
    'DIGNITET (curtain ring with clip)\n' +
    'DIGNITET (curtain wire)\n' +
    'DILLING (underbed storage box)\n' +
    'DIMMA (cord dimmer)\n' +
    'DIMPA (series)\n' +
    'DINERA DEKAL (10 piece dinnerware set)\n' +
    'DINERA DEKAL (bowl)\n' +
    'DINERA (series)\n' +
    'DIOD (glass)\n' +
    'DIODER (lighting strip)\n' +
    'DIODER (multipurpose lighting)\n' +
    'DIREKT (3-piece kitchen utensil set)\n' +
    'DISKA (dishwashing brush)\n' +
    'DISKRET (plant pot)\n' +
    'DISTANS (series)\n' +
    'DITO (20-piece cutlery set)\n' +
    'DITTE (fabric)\n' +
    'DIVISION (suspension set for panel curtain)\n' +
    'DJÄRV (plant pot)\n' +
    'DOCKSTA (dining table)\n' +
    'DOFTA (potpourri)\n' +
    'DOFTA (potpourri in a box)\n' +
    'DOKUMENT (pencil cup)\n' +
    'DOKUMENT (series)\n' +
    'DOLD (single portion sugar shaker)\n' +
    'DOMSJÖ (chopping board)\n' +
    'DOMSJÖ (rinsing basket)\n' +
    'DRACAENA MARGINATA (potted plant)\n' +
    'DRACAENA MASSANGEANA (potted plant)\n' +
    'DRACAENA (plant)\n' +
    'DRAGAN (3-piece bathroom set)\n' +
    'DRAGAN (jar with lid set of 3)\n' +
    'DRAGAN (soap dish)\n' +
    'DRAGON (series)\n' +
    'DRAGÖR (rug)\n' +
    'DRÄLLA (bendable chopping board)\n' +
    'DRÖMMAR (cookie sheet)\n' +
    'DRÖMMAR (series)\n' +
    'DRÖNA (box)\n' +
    'DROPPAR (series)\n' +
    'DROPS (collage frame for 7 photos)\n' +
    'DUDERÖ (floor lamp)\n' +
    'DUKTIG (8-piece table/kitchen textile set)\n' +
    'DUKTIG (glass)\n' +
    'DUKTIG (series)\n' +
    'DUKTIG (tool box)\n' +
    'DVALA (duvet cover and pillowcase(s))\n' +
    'DVALA (fitted sheet)\n' +
    'DVALA (flat sheet)\n' +
    'DVALA (pillowcase for ergonomic pillow)\n' +
    'EDGAR (folding chair)\n' +
    'EDIT (cushion cover)\n' +
    'EDLAND (nightstand)\n' +
    'EDLAND (series)\n' +
    'EDSVIK (dual control kitchen faucet)\n' +
    'EFFEKTIV (system)\n' +
    'EGEBY (rug)\n' +
    'EGIL (stool)\n' +
    'EIDE (bed frame)\n' +
    'EKARP (floor lamp base)\n' +
    'EKARP (table lamp base)\n' +
    'EKÅS (shade)\n' +
    'EKBY BJÄRNUM (bracket)\n' +
    'EKBY HÅLL (bracket)\n' +
    'EKBY HENSVIK (bracket)\n' +
    'EKBY JÄRPEN (shelf)\n' +
    'EKBY MOSSBY (shelf)\n' +
    'EKBY ÖSTEN (shelf)\n' +
    'EKBY ROBERT (bracket)\n' +
    'EKBY STÅTLIG (shelf)\n' +
    'EKBY STILIG (bracket)\n' +
    'EKBY TONY (shelf)\n' +
    'EKBY TRYGGVE (shelf)\n' +
    'EKBY VALTER (bracket)\n' +
    'EKBY VIKTOR (shelf)\n' +
    'EKBY (shelf bar)\n' +
    'EKORRE (series)\n' +
    'EKTORP (cover free-standing chaise lounge)\n' +
    'EKTORP (loveseat)\n' +
    'EKTORP (lumbar cushion)\n' +
    'EKTORP (neckroll)\n' +
    'EKTORP (series)\n' +
    'EKTORP (sofa)\n' +
    'ELDIG HOB (450 B gas cooktop)\n' +
    'ELDIG (gas cooktop)\n' +
    'ELDIG (glass ceramic cooktop)\n' +
    'ELGÅ (system)\n' +
    'ELIAS (chair with armrests)\n' +
    'ELISABET (fabric)\n' +
    'ELLAKAJSA (dish towel)\n' +
    'ELLY (dish towel)\n' +
    'ELVERDAM (single lever kitchen faucet)\n' +
    'EMSEN (double bowl corner sink)\n' +
    'EMU (box with lid)\n' +
    'ENERGISK (18 S refrigerator/freezer)\n' +
    'ENERGISK (18 W refrigerator/freezer)\n' +
    'ENGAN (series)\n' +
    'ENJE (roller blind)\n' +
    'ENSEMBLE (salt and pepper shakers)\n' +
    'ENSEN (bath faucet with strainer)\n' +
    'ENVIS (series)\n' +
    'EPISTEL (series)\n' +
    'ERBIUM (ceiling lamp)\n' +
    'ERIK (drawer unit w 2 drawers on casters)\n' +
    'ERIK (drawer unit w 3 drawers on casters)\n' +
    'ERIK (file cabinet)\n' +
    'ERIKSLUND (series)\n' +
    'ERLAND (chair)\n' +
    'ERLING (clothes-hanger)\n' +
    'ERSERUD (shade)\n' +
    'ERSLEV (rug)\n' +
    'ESPRESSOKAFFE (spresso)\n' +
    'ETTY (apron)\n' +
    'ETTY (dish towel)\n' +
    'EVABRITT (panel curtain)\n' +
    'EVERT (stool)\n' +
    'EXARBY (mattress)\n' +
    'EXKLUSIVT (butcher block)\n' +
    'EXPEDIT (series)\n' +
    'EXPEDIT (shelf insert)\n' +
    'EXPEDIT (single drawer insert)\n' +
    'FABIAN (wall shelf)\n' +
    'FABLER (3-piece cutlery set)\n' +
    'FABLER (3-piece dinnerware set)\n' +
    'FABLER KALAS (decorative stickers)\n' +
    'FABLER KAMRATER (textiles)\n' +
    'FABLER RESA (decorative stickers)\n' +
    'FABLER (eries)\n' +
    'FABLER (box with lid)\n' +
    'FABLER (feeding and baby spoon)\n' +
    'FABLER (mirror)\n' +
    'FABLER (place mat)\n' +
    'FABLER (storage bag)\n' +
    'FABLER (textiles)\n' +
    'FABRINA (bedspread)\n' +
    'FADO (pendant downlight)\n' +
    'FADO (pendant lamp)\n' +
    'FADO (table lamp)\n' +
    'FAMNIG HJÄRTA (cushion)\n' +
    'FANSTA (shade)\n' +
    'FANTAST (meat thermometer/timer)\n' +
    'FANTASTISK (napkin holder for 50 napkins)\n' +
    'FANTASTISK (paper napkin)\n' +
    'FÄRGGLAD (children\'s chair)\n' +
    'FÄRGRIK TROLSK (bowl)\n' +
    'FÄRGRIK TROLSK (series)\n' +
    'FÄRGRIK (bowl)\n' +
    'FÄRGRIK (mug)\n' +
    'FÄRGRIK (plate)\n' +
    'FÄRGRIK (series)\n' +
    'FÄRGRIK (side plate)\n' +
    'FÄRM (vase)\n' +
    'FARTYG (triple ceiling spotlight)\n' +
    'FARTYG (wall spotlight)\n' +
    'FARUM (rug)\n' +
    'FASTBO (wall panel)\n' +
    'FATTBAR (3-piece knife set)\n' +
    'FAVORIT (saucepan with lid)\n' +
    'FAVORIT (series)\n' +
    'FEJKA (artificial plant in pot)\n' +
    'FELICIA (series)\n' +
    'FENOMEN (block candle)\n' +
    'FENOMEN (block candle)\n' +
    'FENOMEN (floating candle)\n' +
    'FIBBE (bin with lid)\n' +
    'FICUS MICROCARPA GINSENG (plant with pot)\n' +
    'FIGGJO (mirror)\n' +
    'FILLSTA (floor lamp)\n' +
    'FILLSTA (pendant lamp)\n' +
    'FILLSTA (table lamp)\n' +
    'FINLIR FLADDRA (frame for 5-10 pictures)\n' +
    'FINLIR (series)\n' +
    'FINNGRUND (shower curtain)\n' +
    'FISKEVIK (picture holders)\n' +
    'FIXA (17-piece tool kit)\n' +
    'FIXA (2-piece tool set)\n' +
    'FIXA (8-piece tool kit)\n' +
    'FIXA (clips/binder/touch+close fastening)\n' +
    'FIXA (countertop cover strip)\n' +
    'FIXA (diffusion barrier)\n' +
    'FIXA (drill template)\n' +
    'FIXA (floor laying kit)\n' +
    'FIXA (floor protectors with rivet)\n' +
    'FIXA (paint brush set)\n' +
    'FIXA (picture hook)\n' +
    'FIXA (screw with plug)\n' +
    'FIXA (stick-on floor protectors set of 20)\n' +
    'FJÄDRAR (inner cushion)\n' +
    'FJÄLLSTA (series)\n' +
    'FJELLSE (bed frame)\n' +
    'FLÄCKIG (colander)\n' +
    'FLÄCKIG (measuring cup)\n' +
    'FLÄCKIG (mixing bowl)\n' +
    'FLAKSA (ceramic sharpener)\n' +
    'FLÄNG (hanger with 4 knobs)\n' +
    'FLANÖR (plant pot)\n' +
    'FLÅREN (series)\n' +
    'FLÅREN (sink cabinet)\n' +
    'FLÄTA (laundry basket)\n' +
    'FLÄTA (magazine file)\n' +
    'FLÄTA (magazine rack)\n' +
    'FLÄTA (storage rack for writing materials)\n' +
    'FLÄTA (wastepaper basket)\n' +
    'FLATEN (storage tin with lid)\n' +
    'FLIT (book-end)\n' +
    'FLOKATI (rug)\n' +
    'FLORERA MYS (scented candle with 3 wicks)\n' +
    'FLORERA (series)\n' +
    'FLORÖ (bed frame)\n' +
    'FLÖRT (cd case)\n' +
    'FLÖRT (unknown)\n' +
    'FLUKTA (clock)\n' +
    'FLYGEL (work lamp)\n' +
    'FLYN LILL (panel curtain)\n' +
    'FLYT (magazine file)\n' +
    'FLYTTA (kitchen cart)\n' +
    'FNISS (wastepaper basket)\n' +
    'FOLKVIK TV (bench with storage)\n' +
    'FÖRHÖJA (cutlery tray)\n' +
    'FÖRHÖJA (series)\n' +
    'FÖRHÖJA (wall cabinet)\n' +
    'FORMAT (cabinet lighting)\n' +
    'FORMAT (floor/reading lamp)\n' +
    'FORMAT (work lamp)\n' +
    'FÖRNUFT (20-piece cutlery set)\n' +
    'FORSÅ (work lamp)\n' +
    'FÖRSIKTIG (children\'s stool)\n' +
    'FÖRSTÅ (coffee/tea maker)\n' +
    'FORSYTIA (bedspread)\n' +
    'FÖRTRÄFFLIG (scented candle in glass)\n' +
    'FÖRVAR (jar with lid)\n' +
    'FOTO (pendant lamp)\n' +
    'FRÄCK (mirror)\n' +
    'FRÄJEN (bath sheet)\n' +
    'FRAKTA (cart)\n' +
    'FRAKTA (hand cart with storage bag)\n' +
    'FRAKTA (loading strap with buckle)\n' +
    'FRAKTA (luggage straps)\n' +
    'FRAKTA (shopping bag)\n' +
    'FRAKTA (shopping bag)\n' +
    'FRAKTA (storage bag for cart)\n' +
    'FRAKTA (tarpaulin)\n' +
    'FRAKTA (tarpaulin rope)\n' +
    'FRAMSTÅ (wall bracket for flat screen TV)\n' +
    'FRAMTID (microwave oven with extractor fan)\n' +
    'FRAMTID (series)\n' +
    'FRANKLIN (bar stool with backrest)\n' +
    'FREDEN (series)\n' +
    'FREDEN/HÖLLVIKEN (sink cabinet)\n' +
    'FREDLIG (paper napkin)\n' +
    'FREDRIK (series)\n' +
    'FREDRIKA (fabric)\n' +
    'FRIDFULL (plant pot)\n' +
    'FROST (drying rack)\n' +
    'FRYKEN (box with lid)\n' +
    'FUGA (ceiling spotlight)\n' +
    'FUGA (ceiling/wall lamp)\n' +
    'FULLEN (high cabinet)\n' +
    'FULLEN (mirror cabinet)\n' +
    'FULLEN (mirror with shelf)\n' +
    'FULLEN (sink base cabinet with 2 doors)\n' +
    'FULLEN (sink cabinet)\n' +
    'FYLLEN (laundry basket)\n' +
    'GALANT (conference table)\n' +
    'GALANT (system)\n' +
    'GALEJ (candle dish)\n' +
    'GALEJ (tealight holder)\n' +
    'GÅNGBAR (curtain rod set)\n' +
    'GARDENIA JASMINOIDES (potted plant)\n' +
    'GÅSER (rug)\n' +
    'GÅSGRUND (series)\n' +
    'GÄSPA (fitted sheet)\n' +
    'GÄSPA (flat sheet)\n' +
    'GÄSPA (pillowcase)\n' +
    'GATTEN (rug)\n' +
    'GEDSER (rug)\n' +
    'GEMAK (colander)\n' +
    'GILBERT (chair)\n' +
    'GILBERT (stool)\n' +
    'GILDA (collection)\n' +
    'GISLEV (rug)\n' +
    'GLANA (collage frame for 4 photos)\n' +
    'GLANA (frame)\n' +
    'GLÄNSA (lighting chain w/144 bulbs)\n' +
    'GLÄNSA (pendant lamp)\n' +
    'GLASÖRT KULLE (duvet cover and pillowcase(s))\n' +
    'GLASÖRT STRECK (duvet cover and pillowcase(s))\n' +
    'GLASÖRT TRÄD (duvet cover and pillowcase(s))\n' +
    'GLÄTTIG (place mat)\n' +
    'GLENN (bar stool)\n' +
    'GLIMMA (candle holder)\n' +
    'GLIMMA (candle in a metal cup)\n' +
    'GLIMMA (tealight holder)\n' +
    'GLIMMA (tealights)\n' +
    'GLIRA (handle)\n' +
    'GLIRA (knob)\n' +
    'GLIS (box with lid)\n' +
    'GLITTER (handle)\n' +
    'GLOBAL (work lamp)\n' +
    'GLÖDA (bulb E12 sign)\n' +
    'GLÖDA (bulb E17 reflector R14)\n' +
    'GNARP (5-piece kitchen utensil set)\n' +
    'GODIS MIX (glass)\n' +
    'GODIS (glass)\n' +
    'GODMORGON (box with compartments)\n' +
    'GODMORGON (box with lid)\n' +
    'GODMORGON (mirror)\n' +
    'GODMORGON (series)\n' +
    'GODMORGON (storage unit)\n' +
    'GODMORGON (storage with compartments)\n' +
    'GODMORGON (vanity light)\n' +
    'GOLIAT (computer desk)\n' +
    'GOLIAT (drawer unit on casters)\n' +
    'GÖMMAREN (universal shower curtain rod)\n' +
    'GORM (1 shelf section/bottle racks)\n' +
    'GORM (2 shelf sections)\n' +
    'GORM (shelving unit)\n' +
    'GORM (system)\n' +
    'GOSA ASTER (pillow)\n' +
    'GOSA HASSEL (pillow)\n' +
    'GOSA KÄRNA (pillow core)\n' +
    'GOSA KÄRNA (pillow core)\n' +
    'GOSA KLÄTT (pillow)\n' +
    'GOSA KRISSLA (pillow)\n' +
    'GOSA LILJA (pillow)\n' +
    'GOSA PINJE (pillow)\n' +
    'GOSA PINJE (pillow)\n' +
    'GOSA PINJE (pillow)\n' +
    'GOSA RAPS (pillow)\n' +
    'GOSA RAPS (pillow)\n' +
    'GOSA RAPS (pillow)\n' +
    'GOSA SLÅN (pillow)\n' +
    'GOSA SYREN (pillow)\n' +
    'GOSA SYREN (pillow)\n' +
    'GOSA SYREN (pillow)\n' +
    'GOSA TULPAN (pillow)\n' +
    'GOSA VÄDD (pillow)\n' +
    'GOSA VÄDD (pillow)\n' +
    'GOSA VÄDD (pillow)\n' +
    'GOSA VIDE (outer pillow pocket w filling)\n' +
    'GOSA VIDE/KÄRNA (pillow)\n' +
    'GOSA VIDE/KÄRNA (pillow)\n' +
    'GOSIG (eries)\n' +
    'GRANÅS (series)\n' +
    'GRANAT (cushion)\n' +
    'GRAPEFRUKT (plant pot)\n' +
    'GRATINERA (oven/serving dish)\n' +
    'GRAVYR (handle)\n' +
    'GRAVYR (knob)\n' +
    'GREGOR (swivel chair)\n' +
    'GREJ (handle)\n' +
    'GREVBÄCK (series)\n' +
    'GRILLA (grill pan)\n' +
    'GRILLER (grater)\n' +
    'GRIMEN (bed frame)\n' +
    'GRIP (handle)\n' +
    'GROGGY (coaster)\n' +
    'GROGGY (corkscrew)\n' +
    'GROGGY (tray)\n' +
    'GROLAND (kitchen island)\n' +
    'GRÖNÖ (table lamp)\n' +
    'GRÖNÖ (table lamp)\n' +
    'GRUNDTAL (ighting series)\n' +
    'GRUNDTAL (bathroom series)\n' +
    'GRUNDTAL (drying rack)\n' +
    'GRUNDTAL (glass shelf)\n' +
    'GRUNDTAL (kitchen series)\n' +
    'GRUNDTAL (laundry bin with casters)\n' +
    'GRUNDTAL (mirror)\n' +
    'GRUNDTAL (rail)\n' +
    'GRUNDTAL (s-hook)\n' +
    'GRUNDTAL (wall shelf)\n' +
    'GRUNDTAL/BREDVIKEN (sink with leg frame)\n' +
    'GRUNDTAL/NORRVIKEN (sink with leg frame)\n' +
    'GRUNKA (4-piece kitchen utensil set)\n' +
    'GUBBSKÄR (bathmat)\n' +
    'GULLIVER (bed frame with slatted bed base)\n' +
    'GULLIVER (changing table)\n' +
    'GULLIVER (crib)\n' +
    'GULLUNGE (changing pad)\n' +
    'GULLUNGE (cover)\n' +
    'GUNILLA (fabric)\n' +
    'GUNVOR (fabric)\n' +
    'GURKÖRT (vase)\n' +
    'GUSTAV (desk with shelf unit)\n' +
    'GUSTAV (laptop table)\n' +
    'GYLLEN (panel)\n' +
    'GYLLEN (wall lamp)\n' +
    'GYMNOCALYCIUM (potted plant)\n' +
    'GYNNSAM (chef\'s knife)\n' +
    'GYNNSAM (series)\n' +
    'HÅBOL (box with lid)\n' +
    'HAGALUND (sofa bed)\n' +
    'HAGALUND (sofabed slipcover)\n' +
    'HAKE (knife block with 4 knives)\n' +
    'HÅLLARE (tealight holder for 7 tealights)\n' +
    'HALLARYD (series)\n' +
    'HÅLLÖ (series)\n' +
    'HALOGEN (bulb E12)\n' +
    'HALOGEN (bulb E26)\n' +
    'HALOGEN (bulb G9)\n' +
    'HALOGEN (bulb GU10 35-¦)\n' +
    'HALOGEN (bulb GU4 MR11)\n' +
    'HÄLSA (steel vacuum flask)\n' +
    'HALSTED (door mat)\n' +
    'HALSTED (rug)\n' +
    'HAMPEN (rug)\n' +
    'HÄNGA (children\'s coat-hanger)\n' +
    'HANNES (desk)\n' +
    'HANNES (hutch)\n' +
    'HÄREN (bath sheet)\n' +
    'HAROLA (chair)\n' +
    'HARRY (chair)\n' +
    'HÄSTÖ (headrest)\n' +
    'HÄSTVEDA (armchair)\n' +
    'HATTEN (side table)\n' +
    'HÅVA (curtain rod set)\n' +
    'HÅVA/ANITA (window solution)\n' +
    'HAVBRO (rug)\n' +
    'HAVTORN FÄRM (decorative vase)\n' +
    'HAVTORN (decoration)\n' +
    'HEAT (trivet)\n' +
    'HEAT (trivet)\n' +
    'HEDDA (collection)\n' +
    'HEDERLIG (series)\n' +
    'HEDRA (knob)\n' +
    'HEIMDAL (bed frame)\n' +
    'HEIMDAL (nightstand)\n' +
    'HEJKA (chair cushion)\n' +
    'HEJKA (rocking chair)\n' +
    'HELMER (drawer unit on casters)\n' +
    'HEMLIS (clothes-hanger)\n' +
    'HEMMA (cord set)\n' +
    'HEMMA (floor lamp base)\n' +
    'HEMMA (table lamp base)\n' +
    'HEMMET (rug)\n' +
    'HEMNES (6-drawer chest)\n' +
    'HEMNES (8-drawer dresser)\n' +
    'HEMNES TV (unit)\n' +
    'HEMNES (bedroom series)\n' +
    'HEMNES (chest)\n' +
    'HEMNES (children\'s room series)\n' +
    'HEMNES (coffee table)\n' +
    'HEMNES (living room series)\n' +
    'HEMNES (mirror chest)\n' +
    'HEMNES (nightstand)\n' +
    'HEMNES (shoe cabinet with 4 comparment)\n' +
    'HEMNES (side table)\n' +
    'HEMNES (sofa table)\n' +
    'HEMSJÖ (block candle)\n' +
    'HENNY (collection)\n' +
    'HENRIKSDAL (bar stool with backrest)\n' +
    'HENRIKSDAL (chair)\n' +
    'HENSVIK (children\'s room series)\n' +
    'HERMAN (chair)\n' +
    'HERRÄNG (block candle holder)\n' +
    'HESSUM (door mat)\n' +
    'HESSUM (rug)\n' +
    'HIMMEL (bed canopy)\n' +
    'HIPPEASTRUM (potted plant)\n' +
    'HJUVIK (single lever kitchen faucet)\n' +
    'HOJTA (place mat)\n' +
    'HOL (side table)\n' +
    'HOL (storage cube)\n' +
    'HÖLLVIKEN (sink)\n' +
    'HÖNEFOSS (mirror)\n' +
    'HOPA (clothes-hanger)\n' +
    'HOPEN (series)\n' +
    'HOPEN (system)\n' +
    'HOVÅS (chair cover)\n' +
    'HOVÅS (footstool cover)\n' +
    'HOVÅS (series)\n' +
    'HOVÅS (sofa cover)\n' +
    'HOVEN (rug)\n' +
    'HOVET (mirror)\n' +
    'HOVSKÄR (single lever kitchen faucet)\n' +
    'HUGO (armchair)\n' +
    'HUGO (armrest)\n' +
    'HUGO (bar stool with backrest)\n' +
    'HUGO (chair)\n' +
    'HUGO (stool)\n' +
    'HULDA VILSE (rug)\n' +
    'HULINGEN (pedal bin)\n' +
    'HULTET (dish)\n' +
    'HULTÖ (easy chair)\n' +
    'HURRIG (mug)\n' +
    'HUSÅ (work lamp)\n' +
    'HUSNES (mirror)\n' +
    'HUSÖN (plant pot)\n' +
    'HUSVIK (series)\n' +
    'HUTTEN (9-bottle wine rack)\n' +
    'HYLLIS (shelving unit)\n' +
    'IDEAL (candle dish)\n' +
    'IDEALISK (series)\n' +
    'IDELIG (mixing bowl)\n' +
    'IDGRUND (3-piece bathroom set)\n' +
    'IKEA 365+ ( 18-piece dinnerware set)\n' +
    'IKEA 365+ ()\n' +
    'IKEA 365+ DRÖM ( egg cup)\n' +
    'IKEA 365+ DRÖM ( mug)\n' +
    'IKEA 365+ DRÖM ( side plate)\n' +
    'IKEA 365+ GNISTRA ( chef\'s knife)\n' +
    'IKEA 365+ LUNTA ( pendant lamp)\n' +
    'IKEA 365+ SÄNDA ( 3 way connector)\n' +
    'IKEA 365+ SÄNDA ( 4 way connector)\n' +
    'IKEA 365+ SÄNDA ( track with 2 spotlights)\n' +
    'IKEA 365+ SÄNDA ( track with 3 spotlights)\n' +
    'IKEA 365+ SÄNDA/IKEA 365+ BRASA ( pendant lamp with track)\n' +
    'IKEA 365+ SÄNDA/SKIMRA ( pendant lamp with track)\n' +
    'IKEA 365+ ( bed series)\n' +
    'IKEA 365+ ( bowl)\n' +
    'IKEA 365+ ( can opener)\n' +
    'IKEA 365+ ( coffee cup and saucer)\n' +
    'IKEA 365+ ( cookware series)\n' +
    'IKEA 365+ ( dinnerware series)\n' +
    'IKEA 365+ ( espresso cup and saucer)\n' +
    'IKEA 365+ ( food storage series)\n' +
    'IKEA 365+ ( garlic press)\n' +
    'IKEA 365+ ( glassware)\n' +
    'IKEA 365+ ( knife series)\n' +
    'IKEA 365+ ( lighting)\n' +
    'IKEA 365+ ( mug)\n' +
    'IKEA 365+ ( plate)\n' +
    'IKEA 365+ ( potato peeler)\n' +
    'IKEA 365+ ( serving series)\n' +
    'IKEA 365+ ( sugar bowl) tray tongs\n' +
    'IKEA 365+ ( teacup and saucer)\n' +
    'IKEA 365+ ( teaspoon)\n' +
    'IKEA PS BATIK (textiles)\n' +
    'IKEA PS BINTJE (storage crate)\n' +
    'IKEA PS BJUDA (carafe)\n' +
    'IKEA PS BRUNN (vase)\n' +
    'IKEA PS FÅNGST (hanging storage/6 compartments)\n' +
    'IKEA PS FEJÖ (self-watering plant pot)\n' +
    'IKEA PS GULLHOLMEN (rocking chair)\n' +
    'IKEA PS HÅVET (mattress)\n' +
    'IKEA PS JONSBERG (vase)\n' +
    'IKEA PS KARLJOHAN (side table)\n' +
    'IKEA PS KROG (plate)\n' +
    'IKEA PS LÖMSK (swivel chair)\n' +
    'IKEA PS LÖVÅS (mattress)\n' +
    'IKEA PS MURBO (mattress)\n' +
    'IKEA PS PLANK (room divider)\n' +
    'IKEA PS SPRAKA (spice mill)\n' +
    'IKEA PS STAM (mirror)\n' +
    'IKEA PS STICKA (bedspread/blanket)\n' +
    'IKEA PS STOCK (vase)\n' +
    'IKEA PS STOFF (throw)\n' +
    'IKEA PS STUGA (rug)\n' +
    'IKEA PS SVINGA (hanging seat)\n' +
    'IKEA PS TOTT (textiles)\n' +
    'IKEA PS VÅLLÖ (watering can)\n' +
    'IKEA PS VIRKA (textiles)\n' +
    'IKEA PS (cabinet)\n' +
    'IKEA PS (cabinet on casters)\n' +
    'IKEA PS (clock)\n' +
    'IKEA PS (collection)\n' +
    'IKEA PS (laptop workstation)\n' +
    'IKEA PS (organizer)\n' +
    'IKEA PS (pendant lamp)\n' +
    'IKEA PS (sofabed slipcover)\n' +
    'IKEA PS (tealight holder)\n' +
    'IKEA STOCKHOLM TRIANGEL (rug)\n' +
    'IKEA STOCKHOLM TV (unit)\n' +
    'IKEA STOCKHOLM (cabinet lighting)\n' +
    'IKEA STOCKHOLM (collection)\n' +
    'IKEA STOCKHOLM (footstool)\n' +
    'IKEA STOCKHOLM (footstool cover)\n' +
    'IKEA STOCKHOLM (sofa)\n' +
    'IMPULS (pitcher with lid)\n' +
    'INBYN (chest)\n' +
    'INDIRA (bedspread)\n' +
    'INDO GABBEH (rug)\n' +
    'INFO (scale)\n' +
    'INGEMAR (bar stool with backrest)\n' +
    'INGO (dining table)\n' +
    'INGOLF (bar stool with backrest)\n' +
    'INGOLF (chair)\n' +
    'INGOLF (chair pad)\n' +
    'INGOLF (chair with armrests)\n' +
    'INGOLF (chair with chair pad)\n' +
    'INGOLF (junior chair)\n' +
    'INGOLF (kitchen bench)\n' +
    'INGOLF (stool)\n' +
    'INNER (inner cushion)\n' +
    'INREDA (cabinet lighting)\n' +
    'INREDA (lighting strip)\n' +
    'INSATS (measuring cups)\n' +
    'IRIS (series)\n' +
    'IRJA (curtain rod set)\n' +
    'IRMA (cushion)\n' +
    'IRMA (throw)\n' +
    'ISDANS (roller blind)\n' +
    'ISKORN (2-piece salad server set)\n' +
    'ISTAD (plastic bag)\n' +
    'IVAR (chair)\n' +
    'IVAR (shelving unit)\n' +
    'IVAR (system)\n' +
    'IVETOFTA (lantern)\n' +
    'JÄLL (laundry bag with stand)\n' +
    'JÄMKA (food saver)\n' +
    'JÄMKA (jar with lid)\n' +
    'JÄMKA (series)\n' +
    'JANNE (swivel chair)\n' +
    'JANSJÖ (series)\n' +
    'JANSJÖ (work lamp)\n' +
    'JANUARI (cord set with diffuser)\n' +
    'JANUARI (floor lamp base)\n' +
    'JANUARI (table lamp base)\n' +
    'JAREN (spring mattress)\n' +
    'JÄTTEBRA (plant pot)\n' +
    'JÄTTEFIN (plant pot)\n' +
    'JAVNAKER (mattress set)\n' +
    'JEFF (folding chair)\n' +
    'JIGGA (handle)\n' +
    'JOAKIM (swivel chair)\n' +
    'JOHAN (desk with shelf unit)\n' +
    'JÖKEL (floor uplight/reading lamp)\n' +
    'JOKER (candle dish)\n' +
    'JONAS (series)\n' +
    'JONDAL (mirror)\n' +
    'JONISK (floor/table lamp)\n' +
    'JONSBO ÅSARP (table lamp)\n' +
    'JONSBO ÅSARP (table lamp base)\n' +
    'JONSBO BÄRBY (table lamp)\n' +
    'JONSBO BÄRBY (table lamp base)\n' +
    'JONSBO EGBY (table lamp)\n' +
    'JONSBO GRYBY (table lamp)\n' +
    'JONSBO GRYBY (table lamp base)\n' +
    'JONSBO ILSBO (table lamp)\n' +
    'JONSBO ORÖD (table lamp)\n' +
    'JONSBO ORÖD (table lamp base)\n' +
    'JONSBO (shade)\n' +
    'JORUN FRÖ (duvet cover and pillowcase(s))\n' +
    'JORUN (collection)\n' +
    'JUBLA (pillar candle)\n' +
    'JUBLA (series)\n' +
    'JULES (junior desk chair)\n' +
    'JULES (swivel chair)\n' +
    'JULES (visitor chair)\n' +
    'JULIUS (bar stool)\n' +
    'JUSTINA (chair pad)\n' +
    'KAJSA BLAD (duvet cover and pillowcase(s))\n' +
    'KAJSA ROSOR (duvet cover and pillowcase(s))\n' +
    'KAJSA STEN (duvet cover and pillowcase(s))\n' +
    'KAJSA TRÄD (duvet cover and pillowcase(s))\n' +
    'KAJSA (collection)\n' +
    'KAJSA (small storage series)\n' +
    'KAJSASTINA (fabric)\n' +
    'KALAS (18-piece cutlery set)\n' +
    'KALAS (bowl)\n' +
    'KALAS (plate)\n' +
    'KALAS (tumbler)\n' +
    'KALASET (espresso cup and saucer)\n' +
    'KALLT (5-arm candelabra)\n' +
    'KALLT (7-arm candelabra)\n' +
    'KALLT (decoration lighting)\n' +
    'KALLT (garland with lights)\n' +
    'KALLT (hanging decoration)\n' +
    'KALLT (hanging lights/drape 48 snowflakes)\n' +
    'KALLT (light chain 16 snowflakes)\n' +
    'KALLT (light chain 24 spruce trees)\n' +
    'KALLT (light chain 32 bulbs)\n' +
    'KALLT (light chain 48 snowflakes)\n' +
    'KALLT (light chain with 10 stars)\n' +
    'KALLT (light stick)\n' +
    'KALLT (silhouette light)\n' +
    'KALLT (table lamp)\n' +
    'KALLT (wall decoration 40 bulbs)\n' +
    'KAMFER (plant glide)\n' +
    'KANELBULLAR (cinnamon bun)\n' +
    'KANIST (vase)\n' +
    'KAPA (plant pot)\n' +
    'KÅRABODA (lantern for candle in a metal cup)\n' +
    'KARBY (rug)\n' +
    'KARDEMUMMA (bowl)\n' +
    'KARDEMUMMA (plant pot)\n' +
    'KARDEMUMMA (series)\n' +
    'KARENS (vase)\n' +
    'KARIT (bedspread and cushion cover)\n' +
    'KARLSKRONA (chaise lounge)\n' +
    'KARLSTAD (2 chaise lounges + sofa)\n' +
    'KARLSTAD (2 chaise lounges and loveseat)\n' +
    'KARLSTAD (cover-sofabed)\n' +
    'KARLSTAD (cushion)\n' +
    'KARLSTAD (leg)\n' +
    'KARLSTAD (series)\n' +
    'KARLSTAD (series leather)\n' +
    'KARSTEN (swivel chair)\n' +
    'KASSETT (series)\n' +
    'KASSETT (storage rack for writing materials)\n' +
    'KASSETT (wastepaper basket)\n' +
    'KATTRUP (rug)\n' +
    'KATTUDDEN (toiletry bag set of 2)\n' +
    'KAUSTBY (chair)\n' +
    'KAUSTBY (chair pad)\n' +
    'KAVALKAD (frying pan)\n' +
    'KAVALKAD (series)\n' +
    'KETTY RAND (cushion)\n' +
    'KETTY VÄRLD (cushion)\n' +
    'KETTY (pot holder)\n' +
    'KEX BALLERINA (cookies with chocolate)\n' +
    'KEX SINGOALLA (cookies with raspberry jam)\n' +
    'KIBÄK (rug)\n' +
    'KILBY (bookcase)\n' +
    'KIVIK (chaise cover)\n' +
    'KIVIK (cover one-seat section)\n' +
    'KIVIK (loveseat cover)\n' +
    'KIVIK (series)\n' +
    'KIVIK (sofa cover)\n' +
    'KIVSTA (shade)\n' +
    'KLACK (tray)\n' +
    'KLADD PRICKAR (bib)\n' +
    'KLADD RANDIG (bib)\n' +
    'KLADD (baby bib)\n' +
    'KLAPPAR (series)\n' +
    'KLÄPPE (swivel chair)\n' +
    'KLAPPSTA (chair)\n' +
    'KLAVIATUR (wall uplight)\n' +
    'KLAVSTA (shade)\n' +
    'KLEMENS (pair of armrests)\n' +
    'KLEMENS (swivel chair)\n' +
    'KLINGSBO (coffee table)\n' +
    'KLINGSBO (series)\n' +
    'KLINGSBO (side table)\n' +
    'KLINTHULT (chair)\n' +
    'KLIPPAN (loveseat)\n' +
    'KLIPPAN (series)\n' +
    'KLIPPIG (handle)\n' +
    'KLISTRIG (place mat)\n' +
    'KLOBO (loveseat)\n' +
    'KLUBBO (coffee table)\n' +
    'KLUBBO (nesting tables)\n' +
    'KLUDD (noticeboard)\n' +
    'KNÄCKEBRÖD LEKSANDS (rye crispbread)\n' +
    'KNAPPA (pendant lamp)\n' +
    'KNAPPA (series)\n' +
    'KNASTER (decorative stones)\n' +
    'KNATA (box with lid for paper)\n' +
    'KNIPSA (basket)\n' +
    'KNODD (bin with lid)\n' +
    'KNOPPA (fitted sheet)\n' +
    'KNOPPA (flat sheet)\n' +
    'KNÖS (unknown)\n' +
    'KNUBBIG (table lamp)\n' +
    'KNUFF (magazine file)\n' +
    'KNUTSTORP (chaise lounge)\n' +
    'KNYCK (napkin holder)\n' +
    'KÖGE (door mat)\n' +
    'KÖGE (rug)\n' +
    'KOJA (tent)\n' +
    'KOLDBY (cowhide)\n' +
    'KOLJA (mirror)\n' +
    'KOLON (floor protector)\n' +
    'KOMISK (triple cushion cover)\n' +
    'KOMPISAR (bumper pad)\n' +
    'KOMPLEMENT (basket)\n' +
    'KOMPLEMENT (multi-use hanger)\n' +
    'KOMPLEMENT (storage with compartments)\n' +
    'KONCIS (roasting pan)\n' +
    'KONCIS (series)\n' +
    'KONSMO (series)\n' +
    'KONVALJ (bedspread/blanket)\n' +
    'KOPPANG (3 drawer chest)\n' +
    'KOPPLA (6 outlet power bar with switch)\n' +
    'KORALL ANEMON (tent)\n' +
    'KORPO (chair with armrests)\n' +
    'KORREKT (handle)\n' +
    'KORSFJORD (5-piece bathroom set)\n' +
    'KORT (art card)\n' +
    'KOSING (handle)\n' +
    'KOSING (knob)\n' +
    'KOTTEBO (basket)\n' +
    'KRABB (mirror)\n' +
    'KRAFTIG (chopping board)\n' +
    'KRAMA (washcloth)\n' +
    'KRÄMARE (track light with 3 spotlights)\n' +
    'KRÄMARE (triple ceiling spotlight)\n' +
    'KRÄMARE (wall spotlight)\n' +
    'KRAMFORS (series leather)\n' +
    'KRISTALLER (chandelier)\n' +
    'KRITTER (eries)\n' +
    'KROBY (series)\n' +
    'KROKEN (rail)\n' +
    'KROKEN (series)\n' +
    'KROKVIK (chair hanger)\n' +
    'KRUS (jar with lid)\n' +
    'KRYP (ceiling spotlight with 3 lights)\n' +
    'KRYSSBO (series)\n' +
    'KULLA (series)\n' +
    'KULLA (table lamp)\n' +
    'KULLEN (3 drawer chest)\n' +
    'KULLEN (chest with 2 drawers)\n' +
    'KULLEN (chest with 5 drawers)\n' +
    'KURA (bed tent)\n' +
    'KURA (reversible bed)\n' +
    'KUSINER (series)\n' +
    'KUVERT (place mat)\n' +
    'KVART (series)\n' +
    'KVARTA (alarm clock)\n' +
    'KVARTA (wall clock)\n' +
    'KVARTAL (ceiling fixture)\n' +
    'KVARTAL (corner fixture for triple track)\n' +
    'KVARTAL (corner piece)\n' +
    'KVARTAL (draw rod)\n' +
    'KVARTAL (glide)\n' +
    'KVARTAL (single track rail)\n' +
    'KVARTAL (top and bottom rail)\n' +
    'KVARTAL (triple curtain rail)\n' +
    'KVARTAL (wall hardware)\n' +
    'KVIBY (4-drawer dresser)\n' +
    'KVINTETT (wall uplight)\n' +
    'KVISSEL (door mat)\n' +
    'KVOT (dish drainer)\n' +
    'LACK (series)\n' +
    'LACK (wall shelf unit)\n' +
    'LÄCKÖ (series)\n' +
    'LADDA (battery charger and 6 batteries)\n' +
    'LADDA (rechargeable battery)\n' +
    'LAGAN (countertop)\n' +
    'LAGAN (microwave oven with extractor fan)\n' +
    'LAGAN (range with ceramic cooktop)\n' +
    'LAGAN (single lever kitchen faucet)\n' +
    'LAGAN (single-bowl inset sink)\n' +
    'LÅGIS (mouse pad)\n' +
    'LAGRA (floor/reading lamp)\n' +
    'LAGRA (spotlight)\n' +
    'LAGRA (work lamp)\n' +
    'LAIVA TV (unit)\n' +
    'LAIVA (bookcase)\n' +
    'LAIVA (bridging shelf)\n' +
    'LAIVA (desk)\n' +
    'LÄKT (floor)\n' +
    'LÄKT (molding)\n' +
    'LÄKT (multi-function profile)\n' +
    'LAMPAN (table lamp)\n' +
    'LÄMPLIG (chopping board)\n' +
    'LÄMPLIG (trivet)\n' +
    'LANDET (6-piece vehicle set)\n' +
    'LANDET (8-piece assorted animal set)\n' +
    'LANDET (farmhouse with animals)\n' +
    'LÅNGASJÖ (frame)\n' +
    'LANNI (chair)\n' +
    'LANSA (handle)\n' +
    'LÄRD (20-piece cutlery set)\n' +
    'LÅSBY (rug)\n' +
    'LÄTT (children\'s table and 2 chairs)\n' +
    'LÄTTSAM (baby bath)\n' +
    'LÄTTSAM (changing table baskets set of 3)\n' +
    'LÄTTSAM (children\'s potty)\n' +
    'LAVER (chair)\n' +
    'LEDET (floor lamp)\n' +
    'LEDET (table lamp)\n' +
    'LEDING (track light with 3 spotlights)\n' +
    'LEDING (track light with 5 spotlights)\n' +
    'LEENDE (carafe)\n' +
    'LEGITIM (chopping board)\n' +
    'LEGITIM (chopping board)\n' +
    'LEGYM (2-piece salad server set)\n' +
    'LEIRVIK (bed frame)\n' +
    'LEKA (eries)\n' +
    'LEKFULL LAND (rug)\n' +
    'LEKFULL STAD (rug)\n' +
    'LEKMAN (box)\n' +
    'LEKPLATS (play mat)\n' +
    'LEKSVIK (buffet)\n' +
    'LEKSVIK (cabinet)\n' +
    'LEKSVIK (children\'s room series)\n' +
    'LEKSVIK (desk)\n' +
    'LEKSVIK (dining series)\n' +
    'LEKSVIK (hook)\n' +
    'LEKSVIK (rack with 5 hooks)\n' +
    'LEN STJÄRNA (crib comforter)\n' +
    'LEN (crib comforter)\n' +
    'LEN (crib fitted sheet)\n' +
    'LEN (crib pillow)\n' +
    'LEN (crib pillowcase)\n' +
    'LEN (fitted sheet)\n' +
    'LEN (flat sheet)\n' +
    'LEN (mattress protector)\n' +
    'LENA (fabric)\n' +
    'LENDA (fabric)\n' +
    'LENDA (pair of curtains with tie-backs)\n' +
    'LERAN (pendant lamp)\n' +
    'LERBERG CD/DVD (wall shelf)\n' +
    'LERBERG (series)\n' +
    'LERBERG (shelf unit)\n' +
    'LERDAL (chandelier)\n' +
    'LERSTA (reading/floor lamp)\n' +
    'LEVANGER (mirror)\n' +
    'LIALOTTA (plastic-coated fabric)\n' +
    'LIATORP (coffee table)\n' +
    'LIATORP (series)\n' +
    'LIATORP (sofa table)\n' +
    'LIDAN (basket)\n' +
    'LIDAN (basket)\n' +
    'LIDAN (basket)\n' +
    'LIDAN (door-mounted storage)\n' +
    'LIDAN (toiletry bag set of 2)\n' +
    'LILL (pair of curtains)\n' +
    'LILLABO (series)\n' +
    'LILLÅNGEN (chest of drawers with 3 drawers)\n' +
    'LILLÅNGEN (end unit)\n' +
    'LILLÅNGEN (glass shelf)\n' +
    'LILLÅNGEN (high cabinet)\n' +
    'LILLÅNGEN (mirror cabinet with 1 door)\n' +
    'LILLÅNGEN (mirror cabinet with 2 doors)\n' +
    'LILLÅNGEN (series)\n' +
    'LILLÅNGEN (shelf)\n' +
    'LILLESAND (bed frame)\n' +
    'LILLHOLMEN (ceiling/wall lamp)\n' +
    'LILLHOLMEN (mirror)\n' +
    'LILLHOLMEN (series)\n' +
    'LILLHOLMEN (wall lamp)\n' +
    'LIMMAREN (4-piece bathroom set)\n' +
    'LIMMAREN (bottle)\n' +
    'LINDMON (enetian blind)\n' +
    'LINDSDAL (handle)\n' +
    'LINDSDAL (knob)\n' +
    'LINDVED (side table)\n' +
    'LINGO (series)\n' +
    'LINNARP (series)\n' +
    'LINUS (chair)\n' +
    'LISELOTT (roller blind)\n' +
    'LIVFULL (plant pot)\n' +
    'LJUSÅS SALBO (table lamp)\n' +
    'LJUSÅS USTA (table lamp)\n' +
    'LJUSÅS UVÅS (table lamp)\n' +
    'LJUSÅS YSBY (table lamp)\n' +
    'LJUSDAL (wall shelf)\n' +
    'LJUSNAN (box with lid)\n' +
    'LÖBBO (shade)\n' +
    'LOCK (ceiling lamp)\n' +
    'LÖDDER (series)\n' +
    'LOGGA (series)\n' +
    'LÖJA (20-piece cutlery set)\n' +
    'LÖNSBODA (scented candle in glass)\n' +
    'LOSSNEN (replacement brush)\n' +
    'LOTS (mirror)\n' +
    'LÖVA (bed canopy)\n' +
    'LOVIKEN (dual control kitchen faucet)\n' +
    'LUDDE (sheepskin)\n' +
    'LUDVIG (laptop shelf/charging station)\n' +
    'LUDVIG (laptop workstation)\n' +
    'LUDVIG (router/modem wall cabinet)\n' +
    'LUFTIG HOO (50 S exhaust hood)\n' +
    'LUFTIG HOO (50 S exhaust hood)\n' +
    'LUFTIG HOO (50 S exhaust hood)\n' +
    'LUFTIG (exhaust fan)\n' +
    'LUGN (bowl)\n' +
    'LUGN (plate)\n' +
    'LUMMIG (curtain rod set)\n' +
    'LUMMIG/LINDMON (window solution)\n' +
    'LUNS (writing/magnetic board)\n' +
    'LUPIN (enetian blind)\n' +
    'LUSTIFIK (hat/shoe rack)\n' +
    'LUSY KLOSS (duvet cover and pillowcase(s))\n' +
    'LUSY VÄV (duvet cover and pillowcase(s))\n' +
    'LUSY (bedspread/blanket)\n' +
    'LUSY (collection)\n' +
    'LYCKA (series)\n' +
    'LYCKHEM (dining table)\n' +
    'LYCKHEM (occasional table)\n' +
    'LYCKSELE HÅVET (mattress)\n' +
    'LYCKSELE LÖVÅS (mattress)\n' +
    'LYCKSELE MURBO (mattress)\n' +
    'LYCKSELE (series)\n' +
    'LYDUM (rug)\n' +
    'LYFT (20-piece cutlery set)\n' +
    'LYKTA (table lamp)\n' +
    'LYSTER (candle dish)\n' +
    'MACKIS (storage rack for writing materials)\n' +
    'MAGASIN (chopping board)\n' +
    'MAGASIN (cutlery caddy)\n' +
    'MAGASIN (dish drainer)\n' +
    'MAGASIN (rolling pin)\n' +
    'MAGGAN (place mat)\n' +
    'MAGGAN (table-runner)\n' +
    'MAGNESIUM (spotlight)\n' +
    'MAGNESIUM (spotlight system)\n' +
    'MAJBY (chair with armrests)\n' +
    'MAJKEN (fabric)\n' +
    'MAJVOR (chair pad)\n' +
    'MÅLA (series)\n' +
    'MÄLARÖ (series)\n' +
    'MÄLLA (box)\n' +
    'MALM (3-piece headboard/bed shelf set)\n' +
    'MALM (4-drawer chest)\n' +
    'MALM (outh)\n' +
    'MALM (series)\n' +
    'MALMA (mirror)\n' +
    'MALOU (duvet cover and pillowsham(s))\n' +
    'MALTE (bar stool)\n' +
    'MAMMUT (series)\n' +
    'MANDAL (series)\n' +
    'MANDEL (series)\n' +
    'MÅNLJUS (pendant lamp)\n' +
    'MÅNLJUS (table lamp)\n' +
    'MÅNSTAD (corner sofa-bed w storage)\n' +
    'MÅNSTAD (corner sofa-bed w storage)\n' +
    'MAREN (toilet seat)\n' +
    'MARGINAL (wall shelf with retaining edge)\n' +
    'MARIEBERG (chair cushion)\n' +
    'MÄRIT (place mat)\n' +
    'MÄRIT (table-runner)\n' +
    'MARIUS (stool)\n' +
    'MARKLAND (floor)\n' +
    'MARKUS (swivel chair)\n' +
    'MARTIN (chair)\n' +
    'MÅSNAN (toiletries bag)\n' +
    'MATA (4-piece dinnerware set)\n' +
    'MATILDA (pair of curtains)\n' +
    'MATTEUS (desk)\n' +
    'MÅTTLIG (milk-frothing jug)\n' +
    'MAVAS (entertainment center)\n' +
    'MEDALJ (pot with lid)\n' +
    'MEDALJ (series)\n' +
    'MELBU (bed frame)\n' +
    'MELDAL (day-bed frame)\n' +
    'MELLTORP (dining table)\n' +
    'MELLTORP (occasional table)\n' +
    'MELODI (pendant lamp)\n' +
    'MERETE (pair of curtains)\n' +
    'METALL DUTT (picture holders)\n' +
    'METALL EPOK (frame for 2 pictures)\n' +
    'METRIK (handle)\n' +
    'MICKE (series)\n' +
    'MIEN (storage box)\n' +
    'MIL (floor lamp)\n' +
    'MIL (work lamp)\n' +
    'MINDE (mirror)\n' +
    'MINNA (fabric)\n' +
    'MINNEN (series)\n' +
    'MIXA (3-piece kitchen utensil set)\n' +
    'MIXTUR (oven/serving dish)\n' +
    'MIXTUR (series)\n' +
    'MJÄLLBY (scented candle in pot)\n' +
    'MJÄLLBY (scented candle in pot with lid)\n' +
    'MJÖD (series)\n' +
    'MJÖNÄS (lantern with block candle)\n' +
    'MJÖNÄS (tealight holder)\n' +
    'MOLGER (mirror)\n' +
    'MOLGER (series)\n' +
    'MOLNIG (chandelier)\n' +
    'MONALIS (fabric)\n' +
    'MONGSTAD (mirror)\n' +
    'MÖRKT (lantern for candle in a metal cup)\n' +
    'MÖRKT (lantern for tealight)\n' +
    'MÖRRUM (bed frame with drawers)\n' +
    'MOSES (swivel chair)\n' +
    'MOSJÖ TV (unit)\n' +
    'MOTORP (series)\n' +
    'MOTTO (bowl)\n' +
    'MUDDUS (drop-leaf table)\n' +
    'MULA (24 building blocks with wagon)\n' +
    'MULA (abacus)\n' +
    'MULA (bead roller coaster)\n' +
    'MULA (crane with blocks)\n' +
    'MULA (shape sorter)\n' +
    'MULA (stack &nest cups)\n' +
    'MULA (stacking rings)\n' +
    'MULA (toy hammering block)\n' +
    'MULIG (clothes bar)\n' +
    'MULIG (clothes rack)\n' +
    'MUSIK (wall lamp)\n' +
    'MUSSLA (2-piece knife set)\n' +
    'MYDAL (bunk bed frame)\n' +
    'MYKEN (table mirror)\n' +
    'MYSA GRÄS (comforter)\n' +
    'MYSA LJUNG (comforter)\n' +
    'MYSA RÖNN (comforter)\n' +
    'MYSA RÖNN (comforter)\n' +
    'MYSA RÖNN (comforter)\n' +
    'MYSA RÖNN (comforter)\n' +
    'MYSA STRÅ (comforter)\n' +
    'MYSA STRÅ (comforter)\n' +
    'MYSA STRÅ (comforter)\n' +
    'MYSA STRÅ (comforter)\n' +
    'MYSA VETE (comforter)\n' +
    'MYSA VETE (comforter)\n' +
    'MYSA VETE (comforter)\n' +
    'MYSA VETE (comforter)\n' +
    'NÄCKTEN (bathmat)\n' +
    'NÄCKTEN (hand towel)\n' +
    'NÄCKTEN (shower curtain)\n' +
    'NANDOR (chair)\n' +
    'NÄRHET (series)\n' +
    'NÄSBY (door mat)\n' +
    'NÄSSJÖ (candle holder)\n' +
    'NÄSSJÖ (candlestick)\n' +
    'NÄSTVED (rug)\n' +
    'NÄSUM (series)\n' +
    'NÄTT (20-piece cutlery set)\n' +
    'NEDDA (chair pad)\n' +
    'NEGLINGE (candlestick/tealight holder)\n' +
    'NEKTARIN (self-watering plant pot)\n' +
    'NIDELVA (storage tin with lid)\n' +
    'NILS (armchair)\n' +
    'NILS (chair)\n' +
    'NILS (stool)\n' +
    'NISSE (folding chair)\n' +
    'NIVÅ (floor liner)\n' +
    'NJUTA (bath brush)\n' +
    'NJUTA (bathrobe)\n' +
    'NJUTA (body puff)\n' +
    'NJUTA (foot file)\n' +
    'NJUTA (foot/nail brush set of 2)\n' +
    'NJUTA (pajamas)\n' +
    'NJUTA (slippers)\n' +
    'NOGA (teething rail for crib)\n' +
    'NOJS (alarm clock)\n' +
    'NOMINELL (pair of armrests)\n' +
    'NOMINELL (swivel chair)\n' +
    'NON (bookcase/picture lighting)\n' +
    'NON (countertop lighting)\n' +
    'NON (countertop lighting)\n' +
    'NON (spotlight with shade)\n' +
    'NORBO (wall-mounted drop-leaf table)\n' +
    'NORDANÖ (series)\n' +
    'NORDDAL (bunk bed frame)\n' +
    'NORDEN (dining table)\n' +
    'NORDEN (series)\n' +
    'NORDEN (sideboard)\n' +
    'NORDMYRA (chair)\n' +
    'NORESUND (mirror)\n' +
    'NORESUND (nightstand)\n' +
    'NORNA (chair pad)\n' +
    'NORRESKOG (scented candle in glass)\n' +
    'NORRNÄS (chair)\n' +
    'NORRÖRA (2-piece bathroom dish set)\n' +
    'NORRSKEN (low-voltage wire)\n' +
    'NORRSKEN/DECENNIUM (spotlight)\n' +
    'NORRSKEN/DYGN (spotlight)\n' +
    'NORRSKEN/STRATOSFÄR (spotlight)\n' +
    'NORRSTEN (collection)\n' +
    'NORRTORP (wall shelf)\n' +
    'NORVALD (chair)\n' +
    'NORVALD (chair pad)\n' +
    'NOSTALGISK (series)\n' +
    'NOT (floor uplight)\n' +
    'NOT (floor uplight/reading lamp)\n' +
    'NUMERÄR (countertop)\n' +
    'NUMERÄR (countertop)\n' +
    'NUMERÄR (sink bowl)\n' +
    'NUTID HDN (650 S exhaust hood)\n' +
    'NUTID (23 S refrigerator/freezer)\n' +
    'NUTID (23 W refrigerator/freezer)\n' +
    'NUTID (25 S refrigerator/freezer)\n' +
    'NUTID (forced air oven)\n' +
    'NUTID (oven)\n' +
    'NUTID (series)\n' +
    'NYFORS (floor lamp)\n' +
    'NYFORS (floor/reading lamp)\n' +
    'NYFORS (table lamp)\n' +
    'NYFORS (work lamp)\n' +
    'NYPONROS (duvet cover and pillowcase(s))\n' +
    'NYSNÖ (2-piece bar set)\n' +
    'NYSNÖ (champagne flute)\n' +
    'NYSNÖ (disposable cup)\n' +
    'NYSNÖ (glass)\n' +
    'NYSNÖ (ice bucket with tongs)\n' +
    'NYSNÖ (mug)\n' +
    'NYSNÖ (mug and saucer)\n' +
    'NYSNÖ (napkin holder)\n' +
    'NYSNÖ (paper napkin)\n' +
    'NYSNÖ (paper plate)\n' +
    'NYSNÖ (paper side plate)\n' +
    'NYSNÖ (pitcher)\n' +
    'NYSNÖ (place mat)\n' +
    'NYSNÖ (serving bowl)\n' +
    'NYSNÖ (serving plate)\n' +
    'NYSNÖ (serving stand)\n' +
    'NYSNÖ (wine/champagne cooler)\n' +
    'NYSTED (rug)\n' +
    'NYTER (paper napkin)\n' +
    'NYTTIG FIL (2 charcoal filter)\n' +
    'NYTTIG FIL (3 charcoal filter)\n' +
    'NYTTIG FIL (4 charcoal filter)\n' +
    'NYTTIG FIL (5 charcoal filter)\n' +
    'NYTTIG (power supply cable w/3-prong plug)\n' +
    'NYTTIG (power supply cable w/4-prong plug)\n' +
    'NYTTJA (frame)\n' +
    'NYTTJA (series)\n' +
    'OBSERVATÖR (unknown)\n' +
    'ODDA (nightstand)\n' +
    'ODDA (series)\n' +
    'ODDA (wall cabinet with sliding door)\n' +
    'ODDVAR (stool)\n' +
    'ÖDMJUK (series)\n' +
    'OFELIA VASS (duvet cover and pillowcase(s))\n' +
    'OFELIA (collection)\n' +
    'OLLE (chair)\n' +
    'OLUNDA (picture)\n' +
    'OLUNDA (series)\n' +
    'OMAR (1 shelf section)\n' +
    'OMAR (1 shelf section/bottle racks)\n' +
    'OMAR (2 shelf sections)\n' +
    'OMAR (basket)\n' +
    'OMAR (shelving unit)\n' +
    'OMAR (system)\n' +
    'OMAR (wine shelf)\n' +
    'OMAR (wire basket)\n' +
    'OMSORG (shoe tree) 1 pair\n' +
    'OMSORG (shoe tree) 1 pair\n' +
    'OMTYCKT (place mat)\n' +
    'ÖPPEN (bowl)\n' +
    'ÖPPEN (plate)\n' +
    'OPTIMAL (series)\n' +
    'ORCHIDACEAE (potted plant)\n' +
    'ORDENTLIG (place mat)\n' +
    'ORDNING (colander)\n' +
    'ORDNING (cutlery caddy)\n' +
    'ORDNING (dish drainer)\n' +
    'ORDNING (kitchen utensil rack)\n' +
    'ORDNING (scale)\n' +
    'ORDNING (timer)\n' +
    'ORE (shower curtain rod)\n' +
    'ÖRESUND (toilet seat)\n' +
    'ORGEL VRETEN (floor lamp)\n' +
    'ORGEL (series)\n' +
    'ORRLÖT (4-piece bathroom set)\n' +
    'ÖSTERBYMO (frame)\n' +
    'ÖSTERBYMO (frame for 2 pictures)\n' +
    'OTTAVA (pendant lamp)\n' +
    'OVANLIG (vase)\n' +
    'OXEL (box spring cover)\n' +
    'OXSKÄR (single lever kitchen faucet)\n' +
    'PÅLITLIG (vase)\n' +
    'PAPAJA (plant pot)\n' +
    'PAPAVER OVAL (duvet cover and pillowcase(s))\n' +
    'PAPAVER VÅG (duvet cover and pillowcase(s))\n' +
    'PAPAVER (duvet cover and pillowcase(s))\n' +
    'PARAGRAF (caster for hard floors)\n' +
    'PATRIK (swivel chair)\n' +
    'PATRIK (visitor chair)\n' +
    'PATRULL (3 pair of anti-slip socks)\n' +
    'PATRULL FAST (safety gate)\n' +
    'PATRULL SMIDIG (safety gate)\n' +
    'PATRULL SMIDIG (safety gate extension)\n' +
    'PATRULL (bathtub mat)\n' +
    'PATRULL (corner bumper)\n' +
    'PATRULL (drawer/cabinet catch)\n' +
    'PATRULL (multilock)\n' +
    'PATRULL (safety chain)\n' +
    'PATRULL (tub mat)\n' +
    'PAX (system)\n' +
    'PELLO (chair)\n' +
    'PEPPARKAKOR ANNAS (ginger thins in box)\n' +
    'PEPPARKAKOR ANNAS (ginger thins with almonds)\n' +
    'PEPPARKAKOR ANNAS (ginger thins with cappuccino flavor)\n' +
    'PEPPARKAKOR ANNAS (ginger thins with orange-flavor)\n' +
    'PEPPARKAKOR ANNAS (wholemeal ginger thins)\n' +
    'PERISKOP (hook)\n' +
    'PERISKOP (towel rail)\n' +
    'PERSIKA (vase)\n' +
    'PERSISK GABBEH (rug)\n' +
    'PERSISK HAMADAN (rug)\n' +
    'PERSISK KELIM GASHGAI (rug)\n' +
    'PERSISK KELIM (rug)\n' +
    'PERSISK (rug)\n' +
    'PHALAENOPSIS (potted plant)\n' +
    'PILATORP (basket)\n' +
    'PIRO (wall clock)\n' +
    'PJÄS (basket)\n' +
    'PJÄS (basket with base)\n' +
    'PJÄS (decorative vase)\n' +
    'PJÄS (dish)\n' +
    'PJÄTTERYD (picture)\n' +
    'PJÄTTERYD (series)\n' +
    'PLAN (molding)\n' +
    'PLAN (multi-function profile)\n' +
    'PLAN (quarter round)\n' +
    'PLAN (wall clip for skirting board)\n' +
    'PLASTIS (dishwashing brush)\n' +
    'PLASTIS (ice cube tray)\n' +
    'PLASTIS (rubber gloves)\n' +
    'PLATTA (decking)\n' +
    'PLIKTIG (paper napkin)\n' +
    'PLUGGIS (magazine file)\n' +
    'PLUGGIS (wastepaper basket)\n' +
    'POÄNG (chair)\n' +
    'POÄNG (children\'s armchair)\n' +
    'POÄNG (footstool)\n' +
    'POÄNG (series)\n' +
    'POKAL (series)\n' +
    'POKAL (tumbler)\n' +
    'POLARVIDE (throw)\n' +
    'POMP (lantern for block candle)\n' +
    'PORTIS (series)\n' +
    'POTATISMOS (mashed potatoes)\n' +
    'POVEL (caster for soft floors)\n' +
    'PRÄGEL (countertop)\n' +
    'PRAKTFULL PRO (51 S gas range)\n' +
    'PRAKTFULL PRO (50 S exhaust hood)\n' +
    'PRAKTFULL (gas range with wall panel/extr hood)\n' +
    'PRÄKTIG (curtain rod set)\n' +
    'PRÄNT (box)\n' +
    'PRÄNT (box with lid)\n' +
    'PRÄNT (magazine box with lid)\n' +
    'PREMIÄR (series)\n' +
    'PRESSA (clothes pin)\n' +
    'PRESSA (hanging dryer with 16 clothes clips)\n' +
    'PRESSA (ironing board cover)\n' +
    'PRESTERA (fish/poultry shears)\n' +
    'PRICKIG (microwave lid)\n' +
    'PRODUKT (milk-frother)\n' +
    'PRÖJS (desk pad)\n' +
    'PROMPT (roasting pan with grill rack)\n' +
    'PROPER (series)\n' +
    'PRUTA (food saver)\n' +
    'PUGG (wall clock)\n' +
    'PULT (ceiling lamp)\n' +
    'PUNKT (caster for soft floors)\n' +
    'PUNKTLIG (paper napkin)\n' +
    'PYRA (wok)\n' +
    'PYSSLA (bead shape set of 4)\n' +
    'PYSSLA (beads)\n' +
    'RÅÅN (4-piece bathroom set)\n' +
    'RÅÅN (mirror)\n' +
    'RÅÅN (series)\n' +
    'RÅÅN (soap dish)\n' +
    'RÅÅN (soap dispenser)\n' +
    'RABALDER (cable reel)\n' +
    'RÅDIG (espresso maker 3 cup)\n' +
    'RADIUM (spotlight system)\n' +
    'RAGNA (fabric)\n' +
    'RAJTAN (spice jar)\n' +
    'RAKET (table easel)\n' +
    'RAM (frame)\n' +
    'RAM (mirror)\n' +
    'RAMSKÄR (bathmat)\n' +
    'RAMVIK (coffee table)\n' +
    'RAMVIK (side table with drawer)\n' +
    'RÄNTA (countertop lighting)\n' +
    'RARITET (cheese dome)\n' +
    'RARITET (food saver)\n' +
    'RARITET (sereis)\n' +
    'RAST (3 drawer chest)\n' +
    'RAST (nightstand)\n' +
    'RATIONELL (series)\n' +
    'RÄTTVIK (series)\n' +
    'RAVENEA (potted plant)\n' +
    'REBBENES (leg frame)\n' +
    'REDA (food saver)\n' +
    'REDALEN (bed frame)\n' +
    'REGOLIT (pendant lamp shade)\n' +
    'REGOLIT (series)\n' +
    'REKO (glass)\n' +
    'REKTANGEL (series)\n' +
    'REKTANGEL (vase)\n' +
    'RENATE FLORA (pair of curtains)\n' +
    'RENATE (collection)\n' +
    'RENATE (shade)\n' +
    'RENLIG (dishwasher)\n' +
    'RENLIG (dishwasher with tall tub)\n' +
    'RENLIG (integrated dishwasher)\n' +
    'RENS (sheepskin)\n' +
    'RESURS (carving board)\n' +
    'RETRÄTT (knife block)\n' +
    'RETUR (recycling bin)\n' +
    'RIBBA (frame)\n' +
    'RIBBA (frame for 2 pictures)\n' +
    'RIBBA (series)\n' +
    'RICKARD (swivel chair)\n' +
    'RIGEL (hook)\n' +
    'RIGGA (clothes rack)\n' +
    'RIKLIG (teapot)\n' +
    'RIKTIG ÖGLA (curtain ring)\n' +
    'RIKTIG (curtain ring)\n' +
    'RIKTIG (gathering tape)\n' +
    'RIKTIG (hook)\n' +
    'RIKTIG (tie-back)\n' +
    'RILL (caster)\n' +
    'RILL (locking caster)\n' +
    'RINGSKÄR (detergent dispenser)\n' +
    'RINGSKÄR (single lever kitchen faucet)\n' +
    'RINGUM (rug)\n' +
    'RISÖR (room divider)\n' +
    'RISTEN (box with lid)\n' +
    'RISTEN (box)\n' +
    'RITVA (series)\n' +
    'RIVAL (chopsticks 6 pairs)\n' +
    'ROFYLLD (childrens rocking-chair)\n' +
    'ROGER (chair)\n' +
    'RÖJA (label holder)\n' +
    'ROMANTISK (tray)\n' +
    'RÖNÅS (block candle holder)\n' +
    'RÖNÅS (candlestick)\n' +
    'RÖNÅS (series)\n' +
    'RÖNÅS (tealight holder)\n' +
    'RONDO (18-piece dinnerware set)\n' +
    'RÖNNBÄR (plant pot)\n' +
    'RÖNNBÄR (saucer)\n' +
    'RÖNNSKÄR (series)\n' +
    'RÖRA (mortar and pestel)\n' +
    'ROSTAD LÖK (roasted onion)\n' +
    'ROTERA (lantern for tealight)\n' +
    'RUDOLF (swivel chair)\n' +
    'RUFSIG (wok utensils)\n' +
    'RUGGA (picture hook)\n' +
    'RULL (knob)\n' +
    'RUNDEL (laundry bin)\n' +
    'RUNDEL (wastepaper basket)\n' +
    'RUSCH (wall clock)\n' +
    'RUSIG (decorative stickers)\n' +
    'RUSIG (rocker)\n' +
    'RUSTIK (20-piece cutlery set)\n' +
    'RUTBO (series)\n' +
    'RUTER (ironing board)\n' +
    'RUTGER/JULES (swivel chair with casters)\n' +
    'RYKENE (bed frame)\n' +
    'RYKENE (nightstand)\n' +
    'SAGOSTEN (removable cover)\n' +
    'SALMI (dining table)\n' +
    'SALONG (vase)\n' +
    'SALTGRUND (shower curtain)\n' +
    'SALTSKÄR (mirror cabinet)\n' +
    'SALTSKÄR (wall cabinet)\n' +
    'SAMLA (series)\n' +
    'SAMTID (floor/reading lamp)\n' +
    'SAMTID (table lamp)\n' +
    'SANELA (cushion cover)\n' +
    'SANELA (pair of curtains)\n' +
    'SANSAD (children\'s stool)\n' +
    'SANSAD (children\'s table)\n' +
    'SARALISA (fabric)\n' +
    'SARITA (fabric)\n' +
    'SARITA (pair of curtains)\n' +
    'SÄTER (2.5-seat sofa)\n' +
    'SÄVERN (mirror)\n' +
    'SÄVERN (series)\n' +
    'SÄVERN (towel hanger/shelf)\n' +
    'SÄVERN (wall shelf unit)\n' +
    'SAXNÄS (frame)\n' +
    'SCHLUMBERGERA (potted plant)\n' +
    'SEBASTIAN (bar stool)\n' +
    'SEDLIG (20-piece cutlery set)\n' +
    'SEDLIG (coffee spoon)\n' +
    'SEDLIG (salad/dessert fork)\n' +
    'SEDLIG (spoon)\n' +
    'SEDLIG (teaspoon)\n' +
    'SEKIN (serving bowl)\n' +
    'SEMVIK (4-piece bathroom set)\n' +
    'SEMVIK (tumbler)\n' +
    'SENIOR (oven/serving dish)\n' +
    'SENIOR (series)\n' +
    'SIGNE (rug)\n' +
    'SIGNUM (series)\n' +
    'SIGRID (dish towel)\n' +
    'SIGRID (pot holder)\n' +
    'SIGRID (series)\n' +
    'SINDAL (door mat)\n' +
    'SIRLIG (chandelier for 10 candles)\n' +
    'SJÖVIK (buffet)\n' +
    'SJÖVIK (dining table)\n' +
    'SKALA (tray)\n' +
    'SKÅLIG (serving plate)\n' +
    'SKÄNKA (frying pan)\n' +
    'SKÄNKA (pot with lid)\n' +
    'SKÄNKA (series)\n' +
    'SKÄR (series)\n' +
    'SKIMMER (block candle holder)\n' +
    'SKIMMER (candlestick)\n' +
    'SKIMRA (shade)\n' +
    'SKIR (series)\n' +
    'SKOJ (wall clock)\n' +
    'SKOJIG (ighting Series)\n' +
    'SKOJIG (wall lamp)\n' +
    'SKOJIG (work lamp)\n' +
    'SKORPOR FULLKORN (wholemeal crisprolls)\n' +
    'SKORPOR KARDEMUMMA (cardamom crisp rolls)\n' +
    'SKRAPA (rubber spatula)\n' +
    'SKRIBENT (book-end)\n' +
    'SKRUVSTA (swivel chair)\n' +
    'SKUBB (box)\n' +
    'SKUBB (box with compartments)\n' +
    'SKUBB (clothes cover)\n' +
    'SKUBB (hanging clothes bag)\n' +
    'SKUBB (organizer with 5 compartments)\n' +
    'SKUBB (organizer with 9 compartments)\n' +
    'SKUBB (series)\n' +
    'SKUBB (shoe box)\n' +
    'SKUBB (storage box)\n' +
    'SKUBB (storage case)\n' +
    'SKUGGIG (curtain rod set)\n' +
    'SKUGGIG/ENJE (window solution)\n' +
    'SKUTTA (coaster)\n' +
    'SKUTTA (place mat)\n' +
    'SKYDD (wood treatment oil)\n' +
    'SKYDDA (series)\n' +
    'SLABANG (alarm clock)\n' +
    'SLÄTTEN (floor)\n' +
    'SLÄTTHULT (series)\n' +
    'SLIPAD (3-piece knife set)\n' +
    'SLIPAD (knife block with 5 knives)\n' +
    'SLITBAR (chef\'s knife)\n' +
    'SLITBAR (series)\n' +
    'SLOM (bottle with stopper)\n' +
    'SLOM (series)\n' +
    'SLUGGER (caster)\n' +
    'SLUGIS (box)\n' +
    'SLUGIS (lid)\n' +
    'SLUKA (vacuum flask)\n' +
    'SLUMRA (flat sheet)\n' +
    'SMÅDAL TV (unit)\n' +
    'SMÅDAL (bookcase)\n' +
    'SMÅDAL (bookcase with drawer)\n' +
    'SMÅDAL (coffee table)\n' +
    'SMÅDAL (desk)\n' +
    'SMÅDAL (glass door)\n' +
    'SMAKA (cheese slicer)\n' +
    'SMÄRT (table lamp)\n' +
    'SMARTA NYTTA (serving bowl)\n' +
    'SMARTA NYTTA (serving plate)\n' +
    'SMARTA (oven/serving dish)\n' +
    'SMARTA (pie dish)\n' +
    'SMARTA (series)\n' +
    'SMARTA (serving bowl)\n' +
    'SMARTA (serving plate)\n' +
    'SMASKA (3-piece cutlery set)\n' +
    'SMASKA (6-piece feeding/baby spoon set)\n' +
    'SMASKA (bowl)\n' +
    'SMASKA (eating series)\n' +
    'SMASKA (plate)\n' +
    'SMASKA (training cup)\n' +
    'SMEDSTA (swivel armchair cover)\n' +
    'SMEDSTA (swivel chair)\n' +
    'SMIDD (handle)\n' +
    'SMILA BAGGE (wall lamp)\n' +
    'SMILA BLOMMA (wall lamp)\n' +
    'SMILA MÅNE (wall lamp)\n' +
    'SMILA SOL (ceiling lamp)\n' +
    'SMILA STJÄRNA (wall lamp)\n' +
    'SMYCKA (artificial flower)\n' +
    'SMYCKA (artificial garland)\n' +
    'SMYCKA (artificial wreath)\n' +
    'SMYCKA (series)\n' +
    'SNÅLIS (box)\n' +
    'SNÅLIS (lid)\n' +
    'SNÅR (place mat)\n' +
    'SNÄRTIG (artificial flower)\n' +
    'SNÄRTIG (vase)\n' +
    'SNIGLAR (series)\n' +
    'SNILLE (swivel chair)\n' +
    'SNILLE (visitor chair)\n' +
    'SNITSIG (pot with lid)\n' +
    'SNITSIG (series)\n' +
    'SNITTA (knife)\n' +
    'SNÖA (hristmas stocking)\n' +
    'SNÖA FLINGA (fabric)\n' +
    'SNÖA FLINGA (place mat)\n' +
    'SNÖA HIMMELSK (cushion)\n' +
    'SNÖA HIMMELSK (fabric)\n' +
    'SNÖA MEDALJONG (tablecloth)\n' +
    'SNÖA RUTAN (bag)\n' +
    'SNÖA RUTAN (bath towel)\n' +
    'SNÖA RUTAN (bedspread)\n' +
    'SNÖA RUTAN (cushion)\n' +
    'SNÖA RUTAN (duvet cover and pillowcase(s))\n' +
    'SNÖA RUTAN (fabric)\n' +
    'SNÖA STJÄRNA (apron)\n' +
    'SNÖA STJÄRNA (carry bag)\n' +
    'SNÖA STJÄRNA (children\'s apron)\n' +
    'SNÖA STJÄRNA (dish towel)\n' +
    'SNÖA STJÄRNA (duvet cover and pillowcase(s))\n' +
    'SNÖA STJÄRNA (fabric)\n' +
    'SNÖA STJÄRNA (oven mitt)\n' +
    'SNÖA STJÄRNA (pot holder)\n' +
    'SNÖA STJÄRNA (rug)\n' +
    'SNÖA STJÄRNA (sleeping bag/comforter)\n' +
    'SNÖA (bag)\n' +
    'SNÖA (cushion)\n' +
    'SNÖA (napkin)\n' +
    'SNÖA (shower curtain)\n' +
    'SNÖA (tablecloth)\n' +
    'SNÖA (throw)\n' +
    'SNODD (knob)\n' +
    'SNÖIG (floor lamp)\n' +
    'SNÖIG (pendant lamp)\n' +
    'SNÖIG (wall lamp)\n' +
    'SNÖIG (work lamp)\n' +
    'SNÖRIK (pastry cutter)\n' +
    'SNÖRIK (tin)\n' +
    'SNÖVITA (24-piece gift wrap and label set)\n' +
    'SNÖVITA (block candle)\n' +
    'SNÖVITA (candle in glass)\n' +
    'SNÖVITA (card with envelope)\n' +
    'SNÖVITA (decorative bow)\n' +
    'SNÖVITA (double-sided gift wrap)\n' +
    'SNÖVITA (gift bag)\n' +
    'SNÖVITA (gift bag)\n' +
    'SNÖVITA (gift bag)\n' +
    'SNÖVITA (gift box)\n' +
    'SNÖVITA (gift card)\n' +
    'SNÖVITA (gift wrap)\n' +
    'SNÖVITA (lantern for block candle)\n' +
    'SNÖVITA (lantern for candle in a metal cup)\n' +
    'SNÖVITA (plant pot)\n' +
    'SNÖVITA (ribbon)\n' +
    'SNÖVITA (ribbon)\n' +
    'SNÖVITA (scented candle in glass)\n' +
    'SNÖVITA (tealight holder)\n' +
    'SNUDDA (lazy Susan)\n' +
    'SOCKER (series)\n' +
    'SOCKERÄRT (vase)\n' +
    'SODA (drinking straw)\n' +
    'SOFIA (fabric)\n' +
    'SOLMYRA (picture)\n' +
    'SOLSTA OLARP (chair)\n' +
    'SOLSTA PÄLLBO (footstool)\n' +
    'SOLSTA (sofa bed)\n' +
    'SOLSTRÅLE (vase)\n' +
    'SOLVAR (chair)\n' +
    'SOLVEIG (panel curtain)\n' +
    'SOMNAT (crib)\n' +
    'SOMRIG (vase)\n' +
    'SÖNDRUM (series)\n' +
    'SONGE (mirror)\n' +
    'SORGLÖS (vase)\n' +
    'SÖRLI (mirror)\n' +
    'SORTERA (recycling bin with lid)\n' +
    'SORTI (place mat)\n' +
    'SÖRUM (nightstand)\n' +
    'SPALT (napkin ring/place card stand)\n' +
    'SPÄNN (handle)\n' +
    'SPARKA (soft toy)\n' +
    'SPÄRRA (plastic sheeting)\n' +
    'SPARSAM (compact twin tube)\n' +
    'SPARSAM (fluorescent tube T5)\n' +
    'SPARSAM (low-energy bulb)\n' +
    'SPATHIPHYLLUM (potted plant)\n' +
    'SPEJA (tunnel)\n' +
    'SPÖKA (night light)\n' +
    'SPOLING (eries)\n' +
    'SPONTAN (container for metal board)\n' +
    'SPONTAN (magnetic board)\n' +
    'SPONTAN (series)\n' +
    'SPRALLIG (knob/hook rack)\n' +
    'SPRITTA (series)\n' +
    'STABIL (lid)\n' +
    'STABIL (pasta insert)\n' +
    'STABIL (series)\n' +
    'STACKIG (tray)\n' +
    'STÄLL (series)\n' +
    'STÄM (series)\n' +
    'STAPEL (basket)\n' +
    'STARTBOX PLUS (60-piece dinnerware set)\n' +
    'STAVE (mirror)\n' +
    'STEFAN (chair)\n' +
    'STEK (knife)\n' +
    'STEKA (frying pan)\n' +
    'STENSTORP (kitchen cart)\n' +
    'STENSTORP (kitchen island)\n' +
    'STENSTORP (wall shelf)\n' +
    'STIL (series)\n' +
    'STJÄLK (vase)\n' +
    'STOLMEN (system)\n' +
    'STOPP FILT (rug underlay with anti-slip)\n' +
    'STOPP (anti-slip underlay)\n' +
    'STORÅ (loft bed frame)\n' +
    'STORNÄS (buffet)\n' +
    'STORNÄS (dining table)\n' +
    'STRÅLANDE (chopper)\n' +
    'STRÅLANDE (grater with container)\n' +
    'STRÅLANDE (grater with handle)\n' +
    'STRÅLANDE (rotary grater)\n' +
    'STRÄNGNÄS (series)\n' +
    'STRÄNGSMÅLA (frame)\n' +
    'STRANNE (floor lamp)\n' +
    'STRANNE (table lamp)\n' +
    'STRECKET (handle)\n' +
    'STRIB (rug)\n' +
    'STRIKT (series)\n' +
    'STRIND (coffee table)\n' +
    'STRÖSSEL (ice-cream scoop)\n' +
    'STUVA (system)\n' +
    'STYCKE (shade)\n' +
    'SUCCULENT (potted plant)\n' +
    'SULTAN ALSARP (foundation with storage)\n' +
    'SULTAN ÅRAM (foundation)\n' +
    'SULTAN ATNA (box spring)\n' +
    'SULTAN ELSFJORD (latex mattress)\n' +
    'SULTAN ENGENES (latex mattress)\n' +
    'SULTAN ERFJORD (natural latex mattress)\n' +
    'SULTAN FÅVANG (high-resilience foam mattress)\n' +
    'SULTAN FIDJETUN (memory foam mattress)\n' +
    'SULTAN FINNVIK (memory foam mattress)\n' +
    'SULTAN FJORDGARD (latex and foam mattress)\n' +
    'SULTAN FLOKENES (memory foam mattress)\n' +
    'SULTAN FLORVÅG (foam mattress)\n' +
    'SULTAN FONNES (foam mattress)\n' +
    'SULTAN FOSSING (latex and foam mattress)\n' +
    'SULTAN HAGAVIK (active-response coil mattress)\n' +
    'SULTAN HAMNVIK (active-response coil mattress)\n' +
    'SULTAN HANESTAD (active-response coil mattress)\n' +
    'SULTAN HARESTUA (spring mattress)\n' +
    'SULTAN HJARTDAL (memory foam pillowtop mattress)\n' +
    'SULTAN HJELMÅS (latex pillowtop spring mattress)\n' +
    'SULTAN HUGLO (spring mattress)\n' +
    'SULTAN LADE (slatted bed base)\n' +
    'SULTAN LANGHUS (slatted bed base)\n' +
    'SULTAN LAUKVIK (slatted bed base)\n' +
    'SULTAN LAXEBY (slatted bed base)\n' +
    'SULTAN LERBÄCK (slatted bed base)\n' +
    'SULTAN LONEVÅG (slatted bed base)\n' +
    'SULTAN LURÖY (slatted bed base)\n' +
    'SULTAN TAFJORD (pillowtop)\n' +
    'SULTAN TÅRSTA (pillowtop)\n' +
    'SULTAN TJÖME (pillowtop)\n' +
    'SULTAN TOLG (pillowtop)\n' +
    'SULTAN TVEIT (pillowtop)\n' +
    'SULTAN (connection fitting for spring bases)\n' +
    'SULTAN (leg)\n' +
    'SULTAN (support leg)\n' +
    'SUMMERA (series)\n' +
    'SUNNAN (work lamp)\n' +
    'SUPERFIN (tealight holder)\n' +
    'SUVERÄN (mattress cover)\n' +
    'SVAJS (clothes cover)\n' +
    'SVALA (children\'s table)\n' +
    'SVALBO (dining table)\n' +
    'SVALBO (sideboard)\n' +
    'SVALKA (series)\n' +
    'SVEJE (rug)\n' +
    'SVEP (handle)\n' +
    'SVEP (knob)\n' +
    'SVIND TV (unit)\n' +
    'SVIT (20-piece cutlery set)\n' +
    'SY (7-piece start box)\n' +
    'SY (iron-on hemming tape)\n' +
    'SY (pinking shears)\n' +
    'SY (scissors)\n' +
    'SY (sewing thread)\n' +
    'SYNTES KONST (bowl)\n' +
    'TACKSAM (curtain rod set)\n' +
    'TAG (handle)\n' +
    'TAJMA (wall clock)\n' +
    'TAJT (vase)\n' +
    'TÄLJARE (curtain rod set)\n' +
    'TALLVIK (table lamp)\n' +
    'TÄNDA (timer)\n' +
    'TANJA BRODYR (duvet cover and pillowsham(s))\n' +
    'TÄRNAN (single lever kitchen faucet)\n' +
    'TÅRNBY (rug)\n' +
    'TÅRTA MANDEL (almond cake)\n' +
    'TASSA NATT (wall lamp)\n' +
    'TEKLA (dish towel)\n' +
    'TERJE (folding chair)\n' +
    'TERMOSFÄR (low-voltage wire system 5 spots)\n' +
    'TERTIAL (work lamp)\n' +
    'TEXTUR (floor lamp)\n' +
    'TEXTUR (floor/table lamp)\n' +
    'TEXTUR (table lamp)\n' +
    'THISTED (hand towel)\n' +
    'TIDIG (ceiling spotlight with 5 spots)\n' +
    'TINDRA (seies)\n' +
    'TIRUP (swivel chair)\n' +
    'TITTA DJUR (finger puppet)\n' +
    'TITTA FOLK (finger puppet)\n' +
    'TJUSIG (series)\n' +
    'TOBIAS (chair)\n' +
    'TOBO TV (panel)\n' +
    'TOBO TV (panel with media storage)\n' +
    'TOBO TV (unit)\n' +
    'TOFTBO (bathmat)\n' +
    'TOGA (place mat)\n' +
    'TOKIG (salad spinner)\n' +
    'TOLGA (organizer)\n' +
    'TOLGA (series)\n' +
    'TOLSBY (frame for 2 pictures)\n' +
    'TORBJÖRN (swivel chair)\n' +
    'TORKA (decoration ball)\n' +
    'TORKA (decorative stalk)\n' +
    'TORKA (dried bouquet)\n' +
    'TORSBY (collection)\n' +
    'TORSBY (table)\n' +
    'TOSTARP (series)\n' +
    'TRÅDIG (bowl)\n' +
    'TRÅDIG (candlestick)\n' +
    'TRÅL (series)\n' +
    'TRAMPA (door mat)\n' +
    'TRANBY (mirror)\n' +
    'TRATT (candle snuffer)\n' +
    'TRENSUM (mirror)\n' +
    'TRILLING (poster)\n' +
    'TRIPP (storage tin with lid)\n' +
    'TRIVSAM (coffee cup and saucer)\n' +
    'TRIVSAM (espresso cup and saucer)\n' +
    'TRIVSAM (series)\n' +
    'TRIVSAM (serving bowl)\n' +
    'TRIVSAM (serving plate)\n' +
    'TROFAST (ext bed frame with slatted bed base)\n' +
    'TROFAST (toy storage series)\n' +
    'TROJKA (scissors)\n' +
    'TROJKA (scissors)\n' +
    'TROLIG (curtain rod set)\n' +
    'TROLLFJORDEN (toiletries bag)\n' +
    'TROLLSTA (series)\n' +
    'TROMSNES (day-bed frame)\n' +
    'TROMSÖ (series)\n' +
    'TRONDHEIM (series)\n' +
    'TRONES (shoe storage)\n' +
    'TROPISK (potted plant)\n' +
    'TROSS (track light with 3 spotlights)\n' +
    'TRYGG (serving bowl)\n' +
    'TRYTA (bench)\n' +
    'TULLSTA (chair)\n' +
    'TULSEBODA (candle holder)\n' +
    'TULSEBODA (candlestick)\n' +
    'TULSEBODA (tealight holder)\n' +
    'TUNDRA (floor)\n' +
    'TUNDRA (molding)\n' +
    'TUNDRA (multi-function profile)\n' +
    'TUPPLUR (pair of curtains)\n' +
    'TUPPLUR (roller blind)\n' +
    'TVÅBLAD CIRKEL (duvet cover and pillowcase(s))\n' +
    'TVÅBLAD RUND (duvet cover and pillowcase(s))\n' +
    'TVÅBLAD (duvet cover and pillowcase(s))\n' +
    'TVILLING (poster)\n' +
    'TYDA (handle)\n' +
    'TYGLÖSA (frame)\n' +
    'TYLÖSAND (corner sofa/sofa-bed)\n' +
    'TYLÖSAND (footstool)\n' +
    'TYLÖSAND (one-seat section)\n' +
    'TYLÖSAND (series)\n' +
    'TYLÖSAND (sofa bed slipcover)\n' +
    'TYSNES (table mirror)\n' +
    'TYST (coaster)\n' +
    'TYST (place mat)\n' +
    'ULDUM (rug)\n' +
    'ULLAKAJSA (roller blind)\n' +
    'ULSBERG (mirror)\n' +
    'ULSBERG (nightstand)\n' +
    'UNG DRILL (frame)\n' +
    'UNNI (rug)\n' +
    'UNNI (rug)\n' +
    'UPPENBAR (measuring cup)\n' +
    'UPPLEVA ORMO (wall bracket for flat screen TV)\n' +
    'UPPTÄCKA (backpack on wheels)\n' +
    'UPPTÄCKA (bag)\n' +
    'UPPTÄCKA (briefcase)\n' +
    'UPPTÄCKA (carry-on with wheels and briefcase)\n' +
    'UPPTÄCKA (laptop bag)\n' +
    'UPPTÄCKA (shopping bag with wheels)\n' +
    'UPPTÄCKA (toiletries bag)\n' +
    'UPPTÄCKA (umbrella)\n' +
    'UPPTÄCKA (weekend bag with toilet bag)\n' +
    'URBAN (bar stool)\n' +
    'URBAN (chair)\n' +
    'UTBY (bar table)\n' +
    'UTBY (kitchen island)\n' +
    'UTBY (series)\n' +
    'UTBY (underframe)\n' +
    'UTMÄRKT (series)\n' +
    'UTSIRA (mirror)\n' +
    'VÅGEN (curtain rod set)\n' +
    'VÅGEN (double wall hardware)\n' +
    'VÅGEN/ENJE (window solution)\n' +
    'VÄGGIS (noticeboard)\n' +
    'VÄGHULT (series)\n' +
    'VAKEN (glass)\n' +
    'VALBY RUTA (rug)\n' +
    'VALBY (rug)\n' +
    'VALLVIK (3 drawer chest)\n' +
    'VALLVIK (6-drawer dresser)\n' +
    'VALLVIK TV (bench/coffee table)\n' +
    'VALLVIK (bookcase)\n' +
    'VÄNLIG (series)\n' +
    'VÄNNA (unknown)\n' +
    'VANVIK (bed frame)\n' +
    'VÄRDE (base cabinet)\n' +
    'VÄRDE (countertop)\n' +
    'VÄRDE (double bowl sink)\n' +
    'VÄRDE (glass-door wall cabinet)\n' +
    'VÄRDE (high cabinet f built-in oven/micro)\n' +
    'VÄRDE (series)\n' +
    'VÄRDE (shelving unit)\n' +
    'VÄRME (teapot)\n' +
    'VARSAM (tray)\n' +
    'VARSE (paper napkin)\n' +
    'VASEN (vase)\n' +
    'VÄTE (series)\n' +
    'VEJEN (rug)\n' +
    'VEJMON (coffee table)\n' +
    'VEJMON (series)\n' +
    'VEJMON (side table)\n' +
    'VERKLIG (curtain rod set)\n' +
    'VERKSAM (pair of armrests)\n' +
    'VERKSAM (swivel chair)\n' +
    'VESSLA (lid)\n' +
    'VESSLA (storage crate with casters)\n' +
    'VIKA AMON/VIKA CURRY (table)\n' +
    'VIKA (table bar)\n' +
    'VIKARE (guard rail)\n' +
    'VIKIS (alarm clock)\n' +
    'VILA (3-piece sheet set)\n' +
    'VILA (pillow sham)\n' +
    'VILDBÄR (spray bottle)\n' +
    'VILDRIS (duvet cover and pillowcase(s))\n' +
    'VILMIE (collection)\n' +
    'VILSHULT (picture)\n' +
    'VILSHULT (series)\n' +
    'VINDE (rug)\n' +
    'VINNA (handle)\n' +
    'VINSTRA (6-drawer dresser)\n' +
    'VINSTRA (dressing table with mirror)\n' +
    'VINSTRA (nightstand)\n' +
    'VIPPA (hook)\n' +
    'VIREN (series)\n' +
    'VIRRE (slide with ladder and guard rail)\n' +
    'VIRSERUM (series)\n' +
    'VISEN (series)\n' +
    'VISEN (toilet roll holder)\n' +
    'VISEN (tumbler)\n' +
    'VISEN (wire basket)\n' +
    'VITAMIN (stool)\n' +
    'VITAMINER (textiles)\n' +
    'VITSKÄR (3-piece bathroom set)\n' +
    'VITSKÄR (soap dish)\n' +
    'VITSKÄR (toothbrush holder)\n' +
    'VITTEN (rug)\n' +
    'VIVAN (pair of curtains)\n' +
    'VOLMAR (swivel chair)\n' +
    'VOLYM (steel vacuum flask)\n' +
    'VRETA (chair)\n' +
    'VRETA (corner sofa w end unit left)\n' +
    'VRETA (corner sofa with arm left)\n' +
    'VRETA (corner sofa with arm right)\n' +
    'VRETA (corner sofa with end unit right)\n' +
    'VRETA (end unit/footstool)\n' +
    'VRETA (footstool)\n' +
    'VRETA (loveseat)\n' +
    'VRETA (series)\n' +
    'VRETA (sofa)\n' +
    'VRETA (sofa bed)\n' +
    'VRETA (swivel/reclining/armchair)\n' +
    'VURM (4-bottle wine rack)\n' +
    'VYSSA (series)\n' +
    'WILMA (pair of curtains)\n' +
    'YNGAREN (bottle)\n' +
    'YNGAREN (bowl)\n' +
    'YNGAREN (jar with lid)\n' +
    'YNGAREN (soap dispenser)\n' +
    'YNGAREN (tumbler)\n' +
    'YNGSJÖ (tealight holder)\n' +
    'YSTER (handle)\n' +
    'YUCCA ELEPHANTIPES (potted plant)\n' +
    'ZITA RAND (apron)\n' +
    'ZITA (oven mitt)';

nlp.plugin(nlpSyllables);
let splintedString = inputdata.split('\n');
let productNames = [];
splintedString.forEach((s) => {
    const sa = s.split('(')[0];
    s = sa.substring(0, sa.length - 1);
    if (!s.toUpperCase().startsWith('IKEA')) productNames.push(s);
});
let sy = [];
productNames.forEach(p => {
    const t2 = nlp.term(p);
    let r = t2.syllables();
    if (typeof r === 'string') r = r.split(' ');
    r.forEach(t => {
        if (typeof t === 'string') {
            if (!sy.includes(t)) sy.push(t);
        } else {
            t.forEach(a => {
                // console.log(a)
                if (!sy.includes(a)) sy.push(a);
            });
        }
    });
});


module.exports.generateIkeaName = function (count = Math.floor(Math.random() * 4) + 1) {
    let string = '';
    for (let i = 0; i < count; i++) {
        string = string + randomSyllable();
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function randomSyllable() {
    return sy[Math.floor(Math.random() * sy.length)]
}
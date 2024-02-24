/* <div id="DomMain">
        <div class="card">
            <img src="https://images.bewakoof.com/t640/planet-play-printed-premium-glass-cover-for-poco-x4-pro-5g-shock-proof-scratch-resistant-543578-1663760948-1.jpg" alt="auto">
            <h3>Qroih</h3>
            <p>planet play printed Premium glass Cover for poco x4</p>
            <span class="material-symbols-outlined">
                currency_rupee
                </span>
                <span style="font-size: xx-large;"><b>499</b></span>
                <span style="text-decoration:line-through;">1499</span>
        </div>
        
           

    </div>  */

    let DomMain=document.getElementById("DomMain");
    let mobileCover=
        [
            {
              "model": "Realme",
              "mobileName": "Realme X",
              "price": "$9.99",
              "image": "https://images.bewakoof.com/t640/planet-play-printed-premium-glass-cover-for-poco-x4-pro-5g-shock-proof-scratch-resistant-543578-1663760948-1.jpg"
            },
            {
              "model": "Realme",
              "mobileName": "Realme 7 Pro",
              "price": "$12.99",
              "image": "https://images.bewakoof.com/t1080/follow-your-dreams-premium-glass-case-for-realme-10-pro-5g-shock-proof-scratch-resistant-599306-1687414890-1.jpg"
            },
            {
              "model": "Realme",
              "mobileName": "Realme GT",
              "price": "$8.99",
              "image": "https://images.bewakoof.com/t1080/joker-cartoon-premium-glass-case-for-realme-10-pro-5g-shock-proof-scratch-resistant-599248-1687417750-1.jpg"
            },
            {
              "model": "Realme",
              "mobileName": "Realme C25",
              "price": "$10.99",
              "image": "https://images.bewakoof.com/t1080/fashion-princess-printed-premium-glass-case-for-realme-10-pro-5g-shock-proof-scratch-resistant-566323-1672392428-1.jpg"
            },
            {
              "model": "Realme",
              "mobileName": "Realme Narzo 30 Pro",
              "price": "$11.99",
              "image": "https://images.bewakoof.com/t1080/hat-crew-premium-glass-case-for-realme-8-5g-shock-proof-scratch-resistant-562102-1671096793-1.jpg"
            },
            {
              "model": "Realme",
              "mobileName": "Realme 9i",
              "price": "$7.99",
              "image": "https://images.bewakoof.com/t1080/worship-printed-premium-glass-cover-for-realme-8-5g-shock-proof-scratch-resistant-543642-1663840318-1.jpg"
            },
            {
              "model": "Realme",
              "mobileName": "Realme 8s",
              "price": "$9.99",
              "image": "https://images.bewakoof.com/t1080/cartoon-art-glass-case-for-realme-10-pro-5g-597850-1687271010-1.jpg"
            },
            {
              "model": "Realme",
              "mobileName": "Realme GT Neo 2",
              "price": "$14.99",
              "image": "https://images.bewakoof.com/t1080/king-life-printed-premium-glass-case-for-realme-10-pro-5g-shock-proof-scratch-resistant-566318-1672392034-1.jpg"
            },
            {
              "model": "Realme",
              "mobileName": "Realme C21",
              "price": "$6.99",
              "image": "https://images.bewakoof.com/t1080/pink-butterfly-printed-premium-glass-case-for-realme-10-pro-5g-shock-proof-scratch-resistant-566298-1672389715-1.jpg"
            },
            {
              "model": "Realme",
              "mobileName": "Realme Narzo 50",
              "price": "$8.99",
              "image": "https://images.bewakoof.com/t1080/moon-wolf-printed-premium-glass-case-for-realme-10-pro-5g-shock-proof-scratch-resistant-566308-1672390625-1.jpg"
            },
            {
              "model": "Vivo",
              "mobileName": "Brave Lion Printed Premium Glass case for Vivo V25 Pro",
              "price": "$9.99",
              "image": "https://images.bewakoof.com/t1080/brave-lion-printed-premium-glass-case-for-vivo-v25-pro-shock-proof-scratch-resistant-566708-1672317381-1.jpg"
            },
            {
              "model": "Vivo",
              "mobileName": "Funny Pug Face Printed Premium Glass Case for Vivo V25 Pro",
              "price": "$12.99",
              "image": "https://images.bewakoof.com/t1080/funny-pug-face-printed-premium-glass-case-for-vivo-v25-pro-shock-proof-scratch-resistant-566021-1672385979-1.jpg"
            },
            {
              "model": "Vivo",
              "mobileName": "Kitten Mandala Printed Premium Glass Case for Vivo V25",
              "price": "$8.99",
              "image": "https://images.bewakoof.com/t1080/kitten-mandala-printed-premium-glass-case-for-vivo-v25-pro-shock-proof-scratch-resistant-566050-1672385581-1.jpg"
            },
            {
              "model": "Vivo",
              "mobileName": "Kitty In Pocket Printed Premium Glass Case for Vivo V25 Pro",
              "price": "$10.99",
              "image": "https://images.bewakoof.com/t1080/kitty-in-pocket-printed-premium-glass-case-for-vivo-v25-pro-shock-proof-scratch-resistant-566019-1672386399-1.jpg"
            },
            {
              "model": "Vivo",
              "mobileName": "Power Of Lord Printed Premium Glass Case For Vivo V25 Pro ",
              "price": "₹499",
              "image": "https://images.bewakoof.com/t1080/power-of-lord-printed-premium-glass-case-for-vivo-v25-pro-569205-1673866568-1.jpg"
            },
            {
              "model": "Vivo",
              "mobileName": "Naruto Stick Designer Hard Cover for Vivo Y73",
              "price": "₹199",
              "image": "https://images.bewakoof.com/t540/naruto-stick-designer-hard-cover-for-vivo-y73-484303-1649395229-1.jpeg"
            },
            {
              "model": "Vivo",
              "mobileName": " Luffy Nika Premium Glass Case for Vivo iQOO 11 ",
              "price": "₹499" ,             
              "image": "https://images.bewakoof.com/t1080/luffy-nika-premium-glass-case-for-vivo-iqoo-11-shock-proof-scratch-resistant-570526-1674027742-1.jpg"
            },
            {
              "model": "Vivo",
              "mobileName": "Luffy One Piece Premium Glass Case for Vivo iQOO 11",
              "price": "₹499",
              "image": "https://images.bewakoof.com/t1080/luffy-one-piece-premium-glass-case-for-vivo-iqoo-11-shock-proof-scratch-resistant-570542-1674028352-1.jpg"
            },
            {
              "model": "Vivo",
              "mobileName": "Soul Of Anime Premium Glass Case for Vivo iQOO 11",
              "price": "₹499",
              "image": "https://images.bewakoof.com/t1080/soul-of-anime-premium-glass-case-for-vivo-iqoo-11-shock-proof-scratch-resistant-570561-1674031343-1.jpg"
            },
            {
              "model": "Vivo",
              "mobileName": "Anime Red Moon Premium Glass Case for Vivo iQOO 11",
              "price": "₹499",
              "image": "https://images.bewakoof.com/t1080/anime-red-moon-premium-glass-case-for-vivo-iqoo-11-shock-proof-scratch-resistant-570514-1674026458-1.jpg"
            },
            {
              "model": "Xiaomi",
              "mobileName": "Planet Play Printed Premium Glass Cover for Poco X4 Pro 5G ",
              "price": "₹499",
              "image": "https://images.bewakoof.com/t1080/planet-play-printed-premium-glass-cover-for-poco-x4-pro-5g-shock-proof-scratch-resistant-543578-1663760948-1.jpg"
            },
            {
              "model": "Xiaomi",
              "mobileName": "Red Moon Tiger Printed Premium Glass Cover for Poco X4 Pro 5G",
              "price": "₹499",
              "image": "https://images.bewakoof.com/t1080/red-moon-tiger-printed-premium-glass-cover-for-poco-x4-pro-5g-shock-proof-scratch-resistant-543585-1663760991-1.jpg"
            },
            {
              "model": "Xiaomi",
              "mobileName": "Japanese Art Printed Premium Glass Cover for Poco X4 Pro 5G",
              "price": "₹499",
              "image": "https://images.bewakoof.com/t1080/japanese-art-printed-premium-glass-cover-for-poco-x4-pro-5g-shock-proof-scratch-resistant-543591-1663761143-1.jpg"
            },
            {
              "model": "Xiaomi",
              "mobileName": "Fluorescent Yellow Premium Glass Cover for Poco X4 Pro 5G ",
              "price": "₹499",
              "image": "https://images.bewakoof.com/t1080/fluorescent-yellow-premium-glass-cover-for-poco-x4-pro-5g-shockproof-light-weight-548717-1665746450-1.jpg"
            },
            {
              "model": "Xiaomi",
              "mobileName": "House Of Dragon Designer Hard Cover for Xiaomi Redmi 9 Power",
              "price": "₹199",
              "image": "https://images.bewakoof.com/t1080/house-of-dragon-designer-hard-cover-for-xiaomi-redmi-9-power-521638-1658389799-1.jpg"
            },
            {
              "model": "Xiaomi",
              "mobileName": "Immortal Demigod Designer Hard Cover for Xiaomi Redmi 9 Power",
              "price": "₹199",
              "image": "https://images.bewakoof.com/t1080/immortal-demigod-designer-hard-cover-for-xiaomi-redmi-9-power-564509-1671620854-1.jpg"
            },
            {
              "model": "Xiaomi",
              "mobileName": "Master Jiraiya Designer Hard Cover for Xiaomi Redmi 9 Power",
              "price": "₹199",
              "image": "https://images.bewakoof.com/t1080/master-jiraiya-designer-hard-cover-for-xiaomi-redmi-9-power-554644-1668764488-1.jpg"
            },
            {
              "model": "Xiaomi",
              "mobileName": "Don't Smile Billie Designer Hard Cover for Xiaomi Redmi 9 Power",
              "price": "₹199",
              "image": "https://images.bewakoof.com/t1080/don-t-smile-billie-designer-hard-cover-for-xiaomi-redmi-9-power-553776-1668135942-1.jpg"
            },
            {
              "model": "Xiaomi",
              "mobileName": "Jurassic ID Designer Hard Cover for Xiaomi Redmi 9 Power",
              "price": "₹199",
              "image": "https://images.bewakoof.com/t540/jurassic-id-designer-hard-cover-for-xiaomi-redmi-9-power-506973-1654858339-1.jpg"
            },
            {
              "model": "Xiaomi",
              "mobileName": "T-Rex Roar Designer Hard Cover for Xiaomi Redmi 9 Power",
              "price": "₹199",
              "image": "https://images.bewakoof.com/t540/t-rex-roar-designer-hard-cover-for-xiaomi-redmi-9-power-507221-1654858109-1.jpg"
            },
            {
              "model": "Samsung",
              "mobileName": "Radha Krishna Art Premium Glass Case for Samsung Galaxy S21 FE 5G",
              "price": "₹499",
              "image": "https://images.bewakoof.com/t1080/radha-krishna-art-premium-glass-case-for-samsung-galaxy-s21-fe-5g-shock-proof-scratch-resistant-600430-1687448120-1.jpg"
            },
            {
              "model": "Samsung",
              "mobileName": "Dark Fly Premium Glass Case for Samsung Galaxy S21 FE 5G",
              "price": "₹499",
              "image": "https://images.bewakoof.com/t1080/dark-fly-premium-glass-case-for-samsung-galaxy-s21-fe-5g-shock-proof-scratch-resistant-632856-1708078828-1.jpg"
            },
            {
              "model": "Samsung",
              "mobileName": "Lord Hanuman Animated Premium Glass Case for Samsung Galaxy S20 FE",
              "price": "₹499",
              "image": "https://images.bewakoof.com/t1080/lord-hanuman-animated-premium-glass-case-for-samsung-galaxy-s20-fe-shock-proof-scratch-resistant-599613-1687442950-1.jpg"
            },
            {
              "model": "Samsung",
              "mobileName": "Pug In Winter Premium Glass Case for Samsung Galaxy S20 FE",
              "price": "₹499",
              "image": "https://images.bewakoof.com/t1080/pug-in-winter-premium-glass-case-for-samsung-galaxy-s20-fe-shock-proof-scratch-resistant-632146-1708063846-1.jpg"
            },
            {
              "model": "Samsung",
              "mobileName": "Seeking Wisdom Premium Glass Case for Samsung Galaxy S20 FE",
              "price": "₹499",
              "image": "https://images.bewakoof.com/t1080/seeking-wisdom-premium-glass-case-for-samsung-galaxy-s20-fe-632255-1708062271-1.jpg"
            },
            {
              "model": "Samsung",
              "mobileName": "Lisa Pop Premium Glass Case for Samsung Galaxy S20 FE",
              "price": "₹499",
              "image": "https://images.bewakoof.com/t1080/lisa-pop-premium-glass-case-for-samsung-galaxy-s20-fe-shock-proof-scratch-resistant-631194-1708065066-1.jpg"
            },
            {
              "model": "Samsung",
              "mobileName": "Classic Keypad Pattern Premium Glass Case for Samsung",
              "price": "₹499",
              "image": "https://images.bewakoof.com/t1080/classic-keypad-pattern-premium-glass-case-for-samsung-galaxy-s20-fe-shock-proof-scratch-resistant-598469-1687355882-1.jpg"
            },
            {
              "model": "Samsung",
              "mobileName": "Golden Grey Lion Premium Glass Case for Samsung Galaxy",
              "price": "₹499",
              "image": "https://images.bewakoof.com/t1080/golden-grey-lion-premium-glass-case-for-samsung-galaxy-s20-fe-shock-proof-scratch-resistant-599517-1687412827-1.jpg"
            },
            {
              "model": "Samsung",
              "mobileName": "Cool Naruto Premium Glass Case for Samsung Galaxy S20 FE",
              "price": "₹499",
              "image": "https://images.bewakoof.com/t1080/cool-naruto-premium-glass-case-for-samsung-galaxy-s20-fe-shock-proof-scratch-resistant-561954-1671090044-1.jpg"
            },
            {
              "model": "Samsung",
              "mobileName": "Sunset Of Ocean Premium Glass Case for Samsung Galaxy S20 FE ",
              "price": "₹499$",
              "image": "https://images.bewakoof.com/t1080/sunset-of-ocean-premium-glass-case-for-samsung-galaxy-s20-fe-623593-1695747995-1.jpg"
            },
            {
              "model": "Apple",
              "mobileName": "Who Tracker Premium Glass Case for Apple iPhone 15 Pro Max ",
              "price": "₹399",
              "image": "https://images.bewakoof.com/t1080/who-tracker-premium-glass-case-for-apple-iphone-15-pro-max-shock-proof-scratch-resistant-632654-1708063237-1.jpg"
            },
            {
              "model": "Apple",
              "mobileName": "Sunset Of Ocean Premium Glass Case for Samsung Galaxy S20 FE ",
              "price": "₹299",
              "image": "https://images.bewakoof.com/t1080/rich-brown-premium-glass-case-for-samsung-galaxy-s20-fe-623371-1695748592-1.jpg"
            },
            {
              "model": "Apple",
              "mobileName": "Mentality Memories Premium Glass Case for Apple iPhone 15 Pro Max",
              "price": "₹799",
              "image": "https://images.bewakoof.com/t1080/mentality-memories-premium-glass-case-for-apple-iphone-15-pro-max-shock-proof-scratch-resistant-631366-1708063583-1.jpg"
            },
            {
              "model": "Apple",
              "mobileName": "Astronaut Challenge Premium Glass Case for Apple iPhone 15 Pro Max",
              "price": "₹699",
              "image": "https://images.bewakoof.com/t1080/astronaut-challenge-premium-glass-case-for-apple-iphone-15-pro-max-shock-proof-scratch-resistant-631936-1708078861-1.jpg"
            },
            {
              "model": "Apple",
              "mobileName": "Anti Social Club Premium Glass Case for Apple iPhone 15 Pro Max",
              "price": "₹699",
              "image": "https://images.bewakoof.com/t1080/anti-social-club-premium-glass-case-for-apple-iphone-15-pro-max-shock-proof-scratch-resistant-631795-1708077218-1.jpg"
            },
            {
              "model": "Apple",
              "mobileName": "Anti Social Club Premium Glass Case for Apple iPhone 15 Pro Max",
              "price": "₹699",
              "image": "https://images.bewakoof.com/t1080/black-spring-floral-premium-glass-case-for-iphone-15-pro-max-627182-1699638930-1.jpg"
            },
            {
              "model": "Apple",
              "mobileName": "Brush Art Premium Glass Case for Apple iPhone 15 Pro Max",
              "price": "₹699",
              "image": "https://images.bewakoof.com/t1080/brush-art-premium-glass-case-for-apple-iphone-15-pro-max-620251-1694766057-1.jpg"
            },
            {
              "model": "Apple",
              "mobileName": "iPhone 12 Mini",
              "price": "₹699",
              "image": "https://images.bewakoof.com/t1080/black-panther-premium-glass-case-for-apple-iphone-15-pro-max-620816-1695400011-1.jpg"
            },
            {
              "model": "Apple",
              "mobileName": "Brush Art Premium Glass Case for Apple iPhone 15 Pro Max",
              "price": "₹699",
              "image": "https://images.bewakoof.com/t1080/brush-art-premium-glass-case-for-apple-iphone-15-pro-max-620251-1694766057-1.jpg"
            },
            {
              "model": "Apple",
              "mobileName": "Mask Artist Poster Premium Glass Case for Apple iPhone 15 Pro Max ",
              "price": "₹699",
              "image": "https://images.bewakoof.com/t1080/mask-artist-poster-premium-glass-case-for-apple-iphone-15-pro-max-shock-proof-scratch-resistant-631323-1708063502-1.jpg"
            },
            {
              "model": "OnePlus",
              "mobileName": "Dishonor Premium Glass Case for OnePlus Nord 2T 5G",
              "price": "₹699",
              "image": "https://images.bewakoof.com/t1080/dishonor-premium-glass-case-for-oneplus-nord-2t-5g-shock-proof-scratch-resistant-618302-1694123070-1.jpg"
            },
            {
              "model": "OnePlus",
              "mobileName": "Game Over Premium Glass Case for OnePlus Nord 2T 5G",
              "price": "₹499",
              "image": "https://images.bewakoof.com/t1080/game-over-premium-glass-case-for-oneplus-nord-2t-5g-633215-1708076396-1.jpg"
            },
            {
              "model": "OnePlus",
              "mobileName": "Loading Connection Premium Glass Case for OnePlus Nord 2T 5G",
              "price": "₹499",
              "image": "https://images.bewakoof.com/t1080/loading-connection-premium-glass-case-for-oneplus-nord-2t-5g-shock-proof-scratch-resistant-631242-1708065614-1.jpg"
            },
            {
              "model": "OnePlus",
              "mobileName": "Nagato Designer Hard Cover for OnePlus 9R",
              "price": "₹499",
              "image": "https://images.bewakoof.com/t1080/nagato-designer-hard-cover-for-oneplus-9r-569602-1674141267-1.jpg"
            },
            {
              "model": "OnePlus",
              "mobileName": "Chilling Cat Designer Hard Cover for OnePlus 9R",
              "price": "₹499",
              "image": "https://images.bewakoof.com/t1080/chilling-cat-designer-hard-cover-for-oneplus-9r-569484-1674141172-1.jpg"
            },
            {
              "model": "OnePlus",
              "mobileName": "Loading Connection Premium Glass Case for OnePlus Nord 2T 5G",
              "price": "₹499",
              "image": "https://images.bewakoof.com/t1080/extra-space-designer-hard-cover-for-oneplus-9r-572561-1674628972-1.jpg"
            },
            {
              "model": "OnePlus",
              "mobileName": "Wakanda Forever Logo Designer Hard Cover for OnePlus 9R",
              "price": "₹499",
              "image": "https://images.bewakoof.com/t1080/wakanda-forever-logo-designer-hard-cover-for-oneplus-9r-568739-1673524128-1.jpg"
            },
            {
              "model": "OnePlus",
              "mobileName": "Loading Connection Premium Glass Case for OnePlus Nord 2T 5G",
              "price": "₹499",
              "image": "https://images.bewakoof.com/t1080/path-to-empathy-premium-glass-case-for-oneplus-nord-2t-5g-630284-1706016355-1.jpg"
            },
            {
              "model": "OnePlus",
              "mobileName": "Retro Astronaut Premium Glass Case for OnePlus Nord 2T 5G",
              "price": "₹499",
              "image": "https://images.bewakoof.com/t1080/retro-astronaut-premium-glass-case-for-oneplus-nord-2t-5g-shock-proof-scratch-resistant-619019-1694134615-1.jpg"
            },
            {
              "model": "OnePlus",
              "mobileName": "Look Mom Premium Glass Case for OnePlus Nord 2T 5G",
              "price": "₹499",
              "image": "https://images.bewakoof.com/t1080/look-mom-premium-glass-case-for-oneplus-nord-2t-5g-shock-proof-scratch-resistant-631295-1708066412-1.jpg"
            },
            {
              "model": "Motorola",
              "mobileName": "Superman Logo Collage Moto G7 Power Mobile Cover",
              "price": "₹399",
              "image": "https://images.bewakoof.com/t540/superman-logo-collage-moto-g7-power-mobile-cover-moto-g7-power-mobile-covers-245472-1577276942.jpg"
            },
            {
              "model": "Motorola",
              "mobileName": "Bulati Hai Books Moto G7 Power Mobile Cover",
              "price": "₹499",
              "image": "https://images.bewakoof.com/t540/bulati-hai-books-moto-g7-power-mobile-cover-moto-g7-power-mobile-covers-271812-1582867384.jpg"
            },
            {
              "model": "Motorola",
              "mobileName": "Digital Camo Moto G7 Power Mobile Cover",
              "price": "$₹499",
              "image": "https://images.bewakoof.com/t540/digital-camo-moto-g7-power-mobile-cover-moto-g7-power-mobile-covers-277307-1595944122.jpg"
            },
            {
              "model": "Motorola",
              "mobileName": "Risky Ishq Moto G7 Mobile Cover",
              "price": "₹499",
              "image": "https://images.bewakoof.com/t540/risky-ishq-moto-g7-mobile-cover-moto-g7-mobile-covers-245791-1571469254.jpg"
            },
            {
              "model": "Motorola",
              "mobileName": "Tere Baap Ka Phone Hai Kya Moto G7 Mobile Cover",
              "price": "₹599",
              "image": "https://images.bewakoof.com/t540/tere-baap-ka-phone-hai-kya-moto-g7-mobile-cover-moto-g7-mobile-covers-245760-1571469160.jpg"
            },
            {
              "model": "Motorola",
              "mobileName": "Oops Minnie Moto G7 Mobile Cover",
              "price": "₹299",
              "image": "https://images.bewakoof.com/t540/oops-minnie-moto-g7-mobile-cover-moto-g7-mobile-covers-245776-1577277136.jpg"
            },
            {
              "model": "Motorola",
              "mobileName": "Chai Moto G7 Mobile Cover",
              "price": "₹699",
              "image": "https://images.bewakoof.com/t540/chai-moto-g7-mobile-cover-moto-g7-mobile-covers-245762-1571469167.jpg"
            },
            {
              "model": "Motorola",
              "mobileName": "Apni Hatti Toh Sabki Fatti Moto G7 Power Mobile Cover",
              "price": "₹499",
              "image": "https://images.bewakoof.com/t540/apni-hatti-toh-sabki-fatti-moto-g7-power-mobile-cover-moto-g7-power-mobile-covers-244464-1571315693.jpg"
            },
            {
              "model": "Motorola",
              "mobileName": "Mickey And Minnie Moto G7 Power Mobile Cover",
              "price": "₹299",
              "image": "https://images.bewakoof.com/t540/mickey-and-minnie-moto-g7-power-mobile-cover-moto-g7-power-mobile-covers-244447-1577276915.jpg"
            },
            {
              "model": "Motorola",
              "mobileName": "Ariel Moto G7 Power Mobile Cover (DL)",
              "price": "₹499",
              "image": "https://images.bewakoof.com/t540/ariel-moto-g7-power-mobile-cover-dl-moto-g7-power-mobile-covers-272782-1583303983.jpg"
            }
          ]

        

        function createCard(data) {
            let card = document.createElement("div");
            let image = document.createElement("img");
            let h3 = document.createElement("h3");
            let p = document.createElement("p");
            let spanP = document.createElement("span");
        
            card.className = "card";
            image.src = data.image;
            // image.alt = data.alt; // You can add this if alt attribute is available
            h3.innerText = data.model; 
            p.innerText = data.mobileName;
            spanP.innerText = data.price;
        
            card.append(image, h3, p, spanP);
            return card;
        }
        
        function appendData(items) {
            items.forEach((data) => {
                let card = createCard(data);
                DomMain.appendChild(card);
            });
        }
        
       
        
        appendData(mobileCover);
        
          


    




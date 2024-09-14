
        function inputClick() {
            document.getElementById("submitBtn").value = "submit";
        }
        function userSubmit() {
            document.getElementById("submitBtn").value = "submitted";
            document.getElementById("submitBtn").classList.add("changeBtnColor");
        }
        function userAdvice(event) {
            event.preventDefault();


            const userName = document.getElementById("name").value;
            const userAge = document.getElementById("age").value;
            let container = document.getElementById("para");



            if (userName == '') {
                container.innerHTML = (`<font color="red">Enter Name</font>`)
            }
            else if ((userAge >= 1) && (userAge <= 10)) {
                container.innerHTML = (`Hello <b class="userTitle">${userName}</b>! You are young and have a bright future ahead of you. Don't worry too much, just enjoy being a kid! Try to spend less time on your phone and more time playing and learning new things. Remember, you are special and strong! Believe in yourself, and always choose what makes you happy. No one should tell you how to live your life—trust your heart and keep smiling! <br> Join <a href="https://t.me/variabletribe">Variable Tribe</a> to get more guidance`);
            }

            else if ((userAge > 10) && (userAge <= 18)) {
                container.innerHTML = (`Hello <b class="userTitle">${userName}</b>, you're at a stage in life where it's important to stay focused and avoid distractions. It's easy to get caught up in unproductive things, but your time and energy are valuable. Seek out mentors who inspire and guide you in the right direction. Watch content from creators who share knowledge and positivity, and avoid wasting time on things that don’t help you grow. Read books, improve your vocabulary, and surround yourself with people who uplift and support your goals. You've got great potential, so make the most of it! <br> Join <a href="https://t.me/variabletribe">Variable Tribe</a> to get more guidance`);
            }

            else if ((userAge > 18) && (userAge <= 25)) {
                container.innerHTML = (`Hey <b class="userTitle">${userName}</b>, this is your time to build the future you want! Focus on your personal growth—whether it's business, health, or learning. Surround yourself with people who inspire you, and don’t get lost in the crowd. <br> For guidance and support, join <a href="https://t.me/variabletribe">Variable Tribe</a> and connect with like-minded individuals.`);
            }

            else if ((userAge > 25) && (userAge <= 35)) {
                container.innerHTML = (`Hey <b class="userTitle">${userName}</b>, now is the prime time to solidify your dreams. This phase of life is where you can create lasting foundations. Focus on growing your career, health, and relationships. It’s a great time to take calculated risks that can benefit your future. <br> For inspiration and growth, join <a href="https://t.me/variabletribe">Variable Tribe</a> and meet others on the same journey.`);
            }

            else if ((userAge > 35) && (userAge <= 50)) {
                container.innerHTML = (`Hey <b class="userTitle">${userName}</b>, you’ve gathered so much experience by now! This is a time to reflect on the lessons you’ve learned and use them to steer your life in a positive direction. It's not too late to explore new goals and passions. Stay dedicated to your health, career, and personal growth—there's still much you can achieve! <br> Join <a href="https://t.me/variabletribe">Variable Tribe</a> for continued support and motivation.`);
            }

            else if ((userAge > 50) && (userAge <= 60)) {
                container.innerHTML = (`Hey <b class="userTitle">${userName}</b>, you are in a stage of life where your wisdom and experience are your greatest strengths. You may be thinking about legacy, but remember, it’s never too late to create new opportunities. Take care of your health and happiness, and keep challenging yourself. <br> Join <a href="https://t.me/variabletribe">Variable Tribe</a> to stay motivated and inspired.`);
            }

            else if ((userAge > 60) && (userAge <= 110)) {
                container.innerHTML = (`Hello <b class="userTitle">${userName}</b>, you've reached an amazing milestone in life! With so much knowledge and experience behind you, this is a time for reflection and peace. But it can also be a time to pursue passions you’ve always wanted to explore. Keep learning, stay active, and enjoy every moment. <br> Connect with others on a similar journey by joining <a href="https://t.me/variabletribe">Variable Tribe</a>.`);
            }

            else {
                container.innerHTML = (`<font color="red">check your age input again, it might be invalid  </font>`)
            }
        }
        //made by @farhanpala01
   

function showQuote()
{
    var quoteTag = '<div width="50%"><p align="center"><font size="3" color="#FFFFFF">';
	quoteTag += chooseQuote();
	quoteTag += '</font></p></div>';
	
	document.write(quoteTag);
}

function chooseQuote()
{
	var quotes = new Array();
	var i = 0;
	
    quotes[i++] = makeQuote("That which doesn't kill us makes us stronger, even as it exponentially increases our health insurance premiums.", "The Great Gonzo");
    quotes[i++] = makeQuote("Always be happy.  When people are in a bad mood, the last thing they want to do is hang around with happy people.", "Kermit the Frog");
    quotes[i++] = makeQuote("Life is great.  But without bad times, we wouldn't know the difference.", "Kermit the Frog");
    quotes[i++] = makeQuote("Dreams are how we figure out where we want to go.  Life is how we get there.", "Kermit the Frog");
    quotes[i++] = makeQuote("Success is believing in yourself, then convincing everyone else that you're right.", "Jim Henson");
    quotes[i++] = makeQuote("Great is the road I climb, but the garland offered by an easier effort is not worth the gathering.", "Propertius");
    quotes[i++] = makeQuote("You never fail until you stop trying.", "Anonymous");
    quotes[i++] = makeQuote("You can be upbeat, or you can be beat up.", "Heywood Banks");
    quotes[i++] = makeQuote("I have become one with my computer.  It is a feeling of ecstasy...the perfect blend of logic and emotion.  I have reached...Nerdvana.", "Dilbert");
    quotes[i++] = makeQuote("Hofstadter's Law:  It always takes longer than you think, even when you account for Hofstadter's Law.", "Dr. Douglas Hofstadter");
    quotes[i++] = makeQuote("If God had not invented computer games, man would have to do so.", "Shanghai II");
    quotes[i++] = makeQuote("The nail that stands out gets pounded down.", "Japanese saying");
    quotes[i++] = makeQuote("The secret to happiness is high expectations and your own bag of chips.", "Dogbert");
    quotes[i++] = makeQuote("Ya gotta grab life by the lips and yank as hard as ya can.", '"Weird Al" Yankovic, UHF');
    quotes[i++] = makeQuote("You can be winning and think you're losing if you're not keeping score.", 'Dr. Rick Brinkman, "Life by Design"');
    quotes[i++] = makeQuote("The alpha-beta principle:  If you have an idea that is surely bad, do not take the time to see how truly awful it is.", 'Patrick H. Winston, "Artificial Intelligence, 3rd Ed."');
    quotes[i++] = makeQuote("Yes, we programmers believe that all of life can be explained and programmed.", 'Russ Walter, "The Secret Guide to Computers"');
    quotes[i++] = makeQuote("Occam's Razor:  If two explanations are satisfactory, then the simpler one is better.", "");
    quotes[i++] = makeQuote("All understanding comes from confusion.", "Dr. Marsha Meredith");
    quotes[i++] = makeQuote("Nothing happens...unless something happens.", "Tony Hesseldenz, on event-driven programming");
    quotes[i++] = makeQuote("I have always thought that a degree of Simplicity was an ingredient of Greatness.", "Lord Byron");
    quotes[i++] = makeQuote("RECURSIVE:  adj.  see RECURSIVE.", "Stan Kelly-Bootle, Devil's DP Dictionary");
    quotes[i++] = makeQuote("In the novel I never wrote, I wanted the hero to be a computer programmer because it was the most poetic and romantic occupation I could think of.", 'Alfred Schweigen, "The Music School"');
    quotes[i++] = makeQuote("For those that like this sort of thing, this is the sort of thing they like.", "Max Beerbohm");
    quotes[i++] = makeQuote("There is no knowledge that is not power.", "Mortal Kombat 3");
    quotes[i++] = makeQuote("When love and skill work together, expect a masterpiece.", "John Ruskin");
    quotes[i++] = makeQuote("Make software, not war.", "Michael Henson");
    quotes[i++] = makeQuote("If you are failing to plan, then you are planning to fail.", "Andrew Rollings and Dave Morris");
    quotes[i++] = makeQuote("All things cometh to he who waiteth if he worketh like hell while he waiteth.", "Anonymous");
    quotes[i++] = makeQuote("Whoever is dissatisfied with himself is continually ready for revenge.", "Nietzsche");
    quotes[i++] = makeQuote("Violent people should be shot.", "Lexi-Cross");
    quotes[i++] = makeQuote("Don't be too proud of this technological terror you've constructed.", "Darth Vader");
    quotes[i++] = makeQuote("Do unto others 20% better than you would expect them to do unto you, to correct for subjective error.", "Linus Pauling");
    quotes[i++] = makeQuote("Artificial intelligence is better than natural stupidity.", "Anonymous");
    quotes[i++] = makeQuote("A positive attitude may not solve all your problems, but it will annoy enough people to make it worth the effort.", "Herm Albright");
    quotes[i++] = makeQuote("No act of kindness, no matter how small, is ever wasted.", 'Aesop, "The Lion and the Mouse"');
    quotes[i++] = makeQuote("Dance like it hurts, love like you need money, work when people are watching.", "Scott Adams");
    quotes[i++] = makeQuote("Grabel's Law:  2 is not equal to 3, even for large values of 2.", "");
    quotes[i++] = makeQuote("There is no honor in accepting goals that cannot be met.", 'R.G. Ghattas and Sandra L. McKee, "Practical Project Management"');
    quotes[i++] = makeQuote("The only place success comes before work is in the dictionary.", "Vince Lombardi");
    quotes[i++] = makeQuote("The greatest danger for most of us is not that our aim is too high and we miss it, but that it is too low and we reach it.", "Michelangelo");
    quotes[i++] = makeQuote("An intellectual is a person who has discovered something more interesting than sex.", "Aldous Huxley");
    quotes[i++] = makeQuote("Nothing is as simple as we hope it will be.", "Jim Horning");
    quotes[i++] = makeQuote("Nothing is ever simple.", "Chuck Sutphen");
    quotes[i++] = makeQuote("All men who have achieved great things have been great dreamers.", "Orison Swett Marden");
    quotes[i++] = makeQuote("Efficiency is intelligent laziness.", "Anonymous");
    quotes[i++] = makeQuote("My work is a game, a very serious game.", "M.C. Escher");
    quotes[i++] = makeQuote("All paid jobs absorb and degrade the mind.", "Aristotle");
    quotes[i++] = makeQuote("Sooner or later, those who win are those who think they can.", "Paul Tournier");
    quotes[i++] = makeQuote("The way to succeed is to double your error rate.", "Thomas J. Watson");
    quotes[i++] = makeQuote("Anger, fear, aggression -- the Dark Side of the Force are they.", "Yoda");
    quotes[i++] = makeQuote("In order to succeed, your desire for success should be greater than your fear of failure.", "Bill Cosby");
    quotes[i++] = makeQuote("The creator of the universe works in mysterious ways.  But he uses a base ten counting system and likes round numbers.", "Scott Adams");
    quotes[i++] = makeQuote("I've failed over and over and over again in my life and that is why I succeed.", "Michael Jordan");
    quotes[i++] = makeQuote("A complex system that works is invariably found to have evolved from a simple system that works.", "John Gaule");
    quotes[i++] = makeQuote("Good judgement comes from experience, and often experience comes from bad judgement.", "Rita Mae Brown");
    quotes[i++] = makeQuote("Software is a place where dreams are planted and nightmares harvested, an abstract, mystical swamp where terrible demons compete with magical panaceas, a world of werewolves and silver bullets.", "Brad J. Cox");
    quotes[i++] = makeQuote("There is no computer that has common sense.", "Marvin Minsky");
    quotes[i++] = makeQuote("There is a grain of discovery in the solution of any problem.", "George Polya");
    quotes[i++] = makeQuote("There is a certain majesty in simplicity which is far above all the quaintness of wit.", "Alexander Pope");
    quotes[i++] = makeQuote("If the process is right, the results will take care of themselves.", "Takashi Osada");
    quotes[i++] = makeQuote("Too often, software work follows the first law of bicycling:  No matter where you're going, it's uphill and against the wind.", "Unknown");	
    quotes[i++] = makeQuote("Ability is what you're capable of doing.  Motivation determines what you do.  Attitude determines how well you do it.", "Lou Holtz");	
    quotes[i++] = makeQuote("Our profession goes through methodologies like a 14-year-old goes through clothing.", "Stephen Hawrysh and Jim Ruprecht");	
    quotes[i++] = makeQuote("In theory there is no difference between theory and practice.  But in practice, there is.", "Jan van de Snepscheut");	
    quotes[i++] = makeQuote("Those who welcome death have only tried it from the ears up.", "Wilson Mizner");
    quotes[i++] = makeQuote("The loftier the building, the deeper must the foundation be laid.", "Thomas Kempis");
    quotes[i++] = makeQuote("It is a mistake to think you can solve any major problems just with potatoes.", "Douglas Adams");
    quotes[i++] = makeQuote("I not only use all the brains that I have, but all that I can borrow.", "Woodrow Wilson");
    quotes[i++] = makeQuote("Action may not always bring happiness; but there is no happiness without action.", "Benjamin Disraeli");
    quotes[i++] = makeQuote("You miss 100% of the shots you don't take.", "Wayne Gretzky");
    quotes[i++] = makeQuote("When obstacles arise, you change your direction to reach your goal. You do not change your decision to get there.", "Zig Ziglar");
    quotes[i++] = makeQuote("An idea that is developed and put into action is more important than an idea that exists only as an idea.", "Buddha");
    quotes[i++] = makeQuote("If you only do what you know you can do, you never do very much.", "Tom Krause");
    quotes[i++] = makeQuote("Things turn out best for the people who make the best out of the way things turn out.", "Art Linkletter");
    quotes[i++] = makeQuote("Things work out best for those who make the best of how things work out.", "John Wooden");
    quotes[i++] = makeQuote("Don't limit your challenges.  Challenge your limits.", "Author Unknown");
    quotes[i++] = makeQuote("Whenever you leave behind failure, you're doing good. If you think everything you've done is great, you're probably dumb.", "Louis C.K.");
    quotes[i++] = makeQuote("Work hard, be kind, and amazing things will happen.", "Conan O'Brien");
    quotes[i++] = makeQuote("I honestly think it is better to be a failure at something you love than to be a success at something you hate.", "George Burns");
	
	// quotes[i++] = makeQuote("With or without religion, you would have good people doing good things and evil people doing evil things.  But for good people to do evil things, that takes religion.", "Steven Weinberg");
							
	var q = Math.floor(Math.random() * quotes.length);
	
	return quotes[q];
}

function makeQuote(quote, author)
{
	var q;

    q = '<b>&quot;' + quote + '&quot;</b><br><blockquote><i> -- ' + author + '</i></blockquote>';
	
	return q;
}



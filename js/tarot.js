var NUM_CARDS = 78;

var positionCaptions = new Array(11);
var selectIDs = new Array(11);
var cardNames = new Array(NUM_CARDS);
var cardDescriptions = new Array(NUM_CARDS);
var selectedValues = new Array(11);



function initPositionCaptions()
{
	positionCaptions[1]  = "The Present";
	positionCaptions[2]  = "The Immediate Challenge";
	positionCaptions[3]  = "The Distant Past";
	positionCaptions[4]  = "The Recent Past";
	positionCaptions[5]  = "The Best Outcome";
	positionCaptions[6]  = "The Immediate Future";
	positionCaptions[7]  = "Factors Affecting the Situation";
	positionCaptions[8]  = "External Influences";
	positionCaptions[9]  = "Hopes and Fears";
	positionCaptions[10] = "The Final Outcome";
}


function initSelectIDs()
{
	selectIDs[1]  = "Present";
	selectIDs[2]  = "ImmediateChallenge";
	selectIDs[3]  = "DistantPast";
	selectIDs[4]  = "RecentPast";
	selectIDs[5]  = "BestOutcome";
	selectIDs[6]  = "ImmediateFuture";
	selectIDs[7]  = "FactorsAffectingSituation";
	selectIDs[8]  = "ExternalInfluences";
	selectIDs[9]  = "HopesAndFears";
	selectIDs[10] = "FinalOutcome";
}


function initCards()
{
	cardNames[0] = "0:  The Fool";
	cardDescriptions[0] = "<p>A:  Expresses a light-hearted naturalness, even innocence and direct frankness, which is especially characteristic of children who see and name things for what they really are.  Therefore, he also stands for spontaneity of the moment, in which one follows an impulse that is there by chance, without analyzing its origin.  This is a positive, idealistic and almost carefree and optimistic driving force, which works unexpectedly.</p>";
	cardDescriptions[0] += "<p>B:  Generally warns of foolishness or impulsive behavior, because it is more convenient to behave neutrally or impartially; it is at least sensible to be open-minded about possible developments.  Acting in undue haste entails disadvantages for the time being.</p>";
	
	cardNames[1] = "I:  The Magician";
	cardDescriptions[1] = "<p>A:  He is the expression of the possibilities of creative processes by consciously employing and using mental qualities, intellectual talents, flexibility and originality, and thereby structuring things actively.  Knowledge and consciousness concerning unity allow the manipulation of variety in the world by means of the four elements in their practical form.  Thus, knowledge and power can form things willingly.</p>";
	cardDescriptions[1] += "<p>B:  Chances and possibilities present themselves, which may be used as favorable prerequisites for further developments.  Creativity and skill help to master tasks to come.  This hints at the necessity of mental vigor.</p>";
	
	cardNames[2] = "II:  The Highpriestess";
	cardDescriptions[2] = "<p>In principle, she represents the element water.</p><p>A:  She hints at a sort of fascination and interest which cannot be explained by ratio, but rises from unfathomable depths.  Thus, she represents a knowledge, which is hidden and accessible with difficulties only, but nonetheless evokes a desire one can avoid only with difficulty (according to C. G. Jung, the aspect of the anima embodying the dark unconscious side).</p>";
	cardDescriptions[2] += "<p>B:  On one side she hints at the influence of subconscious, intuitive, or mediumistic powers, or at a female person, with whom the male questioner feels himself involved.</p>";

	cardNames[3] = "III:  The Empress";
	cardDescriptions[3] = "<p>In principle, she represents the element earth.</p><p>A:  She represents security and care, also in the sense of maternal protection.  This means:  supply with vital things derived from the abundance and richness of nature, as well as the experience of human qualities (according to C. G. Jung's psychology, this is the serene, already experienced aspect of the anima shaped by the mother).</p>";
	cardDescriptions[3] += "<p>B:  Past efforts and ambitions lead to corresponding expectations of successes, which may be arranged for by a benevolent patroness who carries out the necessary measures.</p>";

	cardNames[4] = "IV:  The Emperor";
	cardDescriptions[4] = "<p>Zodiac Sign:  Aries  (3/21 - 4/20)</p><p>In principle, he represents the element fire.</p><p>A:  Hints at the controlled and planned execution of projects or enterprises, with regard to clear-cut, sometimes also idealized aims.  He wants to establish stability and order by means of his conditions, in order to be able to guarantee long-term security.  (According to C. G. Jung, he represents the serene, already experienced aspect of the animus shaped by the father).</p>";
	cardDescriptions[4] += "<p>B:  Security and continuity are guaranteed within the bounds of an established order; however, this often makes necessasry self-control as well as understanding of necessities and reason.  Often, this also hints at the influence of an energetic person with management abilities.</p>";

	cardNames[5] = "V:  The Highpriest";
	cardDescriptions[5] = "<p>Zodiac Sign:  Taurus  (4/21 - 5/20)</p><p>In principle, he represents the element air.</p><p>A:  Due to his profound knowledge and convincing arguments derived from well-established tradtions, he represents spiritual leadership.  This also establishes the bounds of his sympathy and tolerance; thus, his kindness and gentleness are changed into strictness, when these bounds are violated, he becomes an admonitor.  He derives his inspiration from his intimate relationship with supernatural powers.  (According to C. G. Jung, the aspect of the animus representing the dark, unconscious side.)</p>";
	cardDescriptions[5] += "<p>B:  A partner or another person apt to do so gives well-meaning advice in the common sense of the word; also hints at a male person with whom the female questioner feels involved; in a partnership already existing, this card represents the partner or hints at the partnership and relationship.</p>";

	cardNames[6] = "VI:  The Lovers";
	cardDescriptions[6] = "<p>Zodiac Sign:  Gemini  (5/21 - 6/20)</p><p>This card illustrates (almost) all facets of love.</p><p>A:  The uniting and binding principle of love, due to the forces of attraction of identical polarities; in this context, a decision is made over different possibilities, which are on the one hand characterized by the appeal of the unknown versus familiarity, on the other hand by liking or passion.  At the same time it represents the transition into a new, self-determined phase of life.</p>";
	cardDescriptions[6] += "<p>B:  Usually refers to a conflict between two forces of attraction requiring a personal decision, which, however, is usually made more by inclination or liking than by rational arguments.</p>";

	cardNames[7] = "VII:  The Chariot";
	cardDescriptions[7] = "<p>Zodiac Sign:  Cancer (6/21 - 7/21)</p><p>A:  There is an independence based above all on safety and security of external conditions, and therefore an independence based on success derived from individual achievements.  At the same time, this implies further creative dynamism, striving for new triumphs and victories.</p>";
	cardDescriptions[7] += "<p>B:  The successes strived for are attained by consistent application of the means being available, sometimes in combination with travel; a possible risk becomes calculable under favorable circumstances.</p>";

	cardNames[8] = "VIII:  Justice";
	cardDescriptions[8] = "<p>Zodiac Sign:  Libra (9/23 - 10/22)</p><p>A:  Hints at regulation through the faculty of judgement and/or conscience and thereby establishes the bounds for freedom of action and decision.  It represents the striving for compensation and balance by weighing and fairness.  If somebody has taken a responsibility, it hints at the demand for justification and account.  However, there is the consideration of whether or not such a justification exists.</p>";
	cardDescriptions[8] += "<p>B:  Justice is brought about by honesty so that official, judicial, financial or formal matters can be completed easily; instead of insisting on one's own, often doubtful persuasion, it would be more sensible to agree to a possible mediation.</p>";

	cardNames[9] = "IX:  The Hermit";
	cardDescriptions[9] = "<p>Zodiac Sign:  Virgo (8/23 - 9/22)</p><p>A:  The distance necessary for the search for wisdom and cognition is attained by seclusion and solitude; when confronted only with essential items, it is easier to learn understanding and observation.  Time is experienced as timelessness and other values are also abolished, so that this neutrality facilitates an individual counsel.</p>";
	cardDescriptions[9] += "<p>B:  The answer to questions existing at the moment will be delayed for some more time and may only or best be given by a person possessing enough distance to really give information about the interrelations and who can thereby contribute to clarification.</p>";

	cardNames[10] = "X:  The Wheel";
	cardDescriptions[10] = "<p>A:  Here, a turning point or point of transition in the present phase of life is shown, whose origins are beyond normal, rational understanding.  Depending on whether this is recognized or not, there is a chance of finding a pther of further personal development.  Or one is taken back by another turn of the wheel, which -- so to speak -- makes it possible to repeat the previous course and to make another attempt, this time, however, under different circumstances.</p>";
	cardDescriptions[10] += "<p>B:  An unexpected change in one's life, usually an amelioration by an act of fate; very often, this is a material advantage, but it may also be a meeting with people having an important influence on one's life.</p>";

	cardNames[11] = "XI:  Strength";
	cardDescriptions[11] = "<p>Zodiac Sign:  Leo (7/22 - 8/22)</p><p>A:  Superior mental qualities are combined with other powers to form a unity of action and a sort of symbiosis consisting of complementary powers, where the seemingly weak reins the powerful.  Thus, self-confidence, courage and steadfastness bestow the determination and the effectiveness to master even difficult situations and courses.</p>";
	cardDescriptions[11] += "<p>B:  Progress is attained by self-confident presentation and persuasiveness, however, only patience and persistence will achieve the decisive success.</p>";

	cardNames[12] = "XII:  The Hanged Man";
	cardDescriptions[12] = "<p>A:  This contact with the external spheres of the dark requires discipline, renunciation and liberation from aspects and things which have dominated life  up to now.  This sort of willpower leads to a change or even reversal of former values, whose sacrifice leads to a profound insight, which can only be attained by this kind of self-experience.</p>";
	cardDescriptions[12] += "<p>B:  Enormous restrictions are demanded in a phase of tests, in which formerly important things must be given up.  Concerning important decisions, one must make concessions, because insistence on former positions would entail unnecessary suffering or complications.</p>";

	cardNames[13] = "XIII:  Death";
	cardDescriptions[13] = "<p>Zodiac Sign:  Scorpio (10/23 - 11/22)</p><p>A:  A cycle is closed, outdated structures are dissolved -- something is &quot;dying&quot;.  A phase of darkness has begun, which can be experienced as frightening, painful and cruel, if one does not know that this necessary step has prepared the way for new developments.  It is the transference to another mental level on the fertile soil of the old.</p>";
	cardDescriptions[13] += "<p>B:  The end of an occasion has been reached, and this effects a profound change in one's way of life.  This implies the possibility of an overall new beginning which opens up considerably improved perspectives.  However, this situation is not always immediately recognized.</p>";

	cardNames[14] = "XIV:  Temperance";
	cardDescriptions[14] = "<p>Zodiac Sign:  Sagittarius (11/23 - 12/21)</p><p>A:  The coordination of inner powers leads to composure and calmness; inner peace is found in a kind of inner reflection, during which one takes in the impressions, and leaves everything as it is.  This balanced composition entails a new system of values, which is much more solid than could be imagined.</p>";
	cardDescriptions[14] += "<p>B:  The recognition of limitations and opportunities leads to the necessary reorganization of one's way of life.  During this phase, thoughtful and moderate behavior is mandatory.</p>";

	cardNames[15] = "XV:  The Devil";
	cardDescriptions[15] = "<p>Zodiac Sign:  Capricorn (12/22 - 1/19)</p><p>A:  At dead of night, when desperation, pain, dispute and vulnerability prevail, it is necessary to resist the temptations of the great challenge.  Personal weaknesses are revealed, personal bonds will become visible.  The recognition of their true nature turns weakness into strength and helps to overcome this &quot;temptation&quot;.</p>";
	cardDescriptions[15] += "<p>B:  At first sight, this is an extremely unpleasant event, but one which will not necessarily lead to serious consequences, as long as one is not frightened or upset, but recognizes one's chance and translates it into action.</p>";

	cardNames[16] = "XVI:  The Tower";
	cardDescriptions[16] = "<p>Representatives of rigid and institutionalized power fall down into the ravine overgrown with thorny bushes.  This is the fall of an old power, already outdated, whose protection had become an end in itself and which did not allow for further development.</p><p>A:  Recognition hits the darkness with unambiguous clearness, reveals its true core, and releases oppressed and bound energies.  This violent start and eruption represents a process of recognition, which reveals the essential core by breaking something up, also by destroying something, and releases new creativity.</p>";
	cardDescriptions[16] += "<p>B:  Disordered and unfavorable conditions lead to vehement changes or unpleasant confrontations with superior powers or institutions.  A sudden radical change under fateful circumstances.</p>";

	cardNames[17] = "XVII:  The Star";
	cardDescriptions[17] = "<p>Zodiac Sign:  Aquarius (1/20 - 2/18)</p><p>A:  Powers which have been hidden and not noticed until now, make new efforts possible and give new impulses by showing a new way through the dark.  Thus, a new perspective is revealed and a destination crystallizes, which can also be understood in the sense of destiny.  This bestows new vital energies, inasmuch as the sources of energy come from combining confidence and optimism.  This is what is meant by hope.</p>";
	cardDescriptions[17] += "<p>B:  Characterizes an important influence on life in the form of a person or idea bestowing new motivation and driving force and thereby encouraging one to make new efforts.  (However, this influence is only pointing the way.)</p>";

	cardNames[18] = "XVIII:  The Moon";
	cardDescriptions[18] = "<p>Zodiac Sign:  Pisces (2/19 - 3/20)</p><p>A:  Only intuition, presentiment and inspiration prove reliable for seeing through illusions, to recognize deceptions and to penetrate delusions.  The narrow path is only safe after confidence has been restored and faith has been consolidated, the more, if it is the only way out.  Quietness and silence help to avoid unnecessary sensation and confusion.</p>";
	cardDescriptions[18] += "<p>B:  Hints at errors, deceptions, and self-deceptions, as well as dangers coming from unexpected directions, which can only be avoided by further prudent procedure.  As long as there is still a bad feeling about some plan, prudence are restraint are advisable -- soon there will be changes, which will ensure clarity.</p>";

	cardNames[19] = "XIX:  The Sun";
	cardDescriptions[19] = "<p>A:  Starting from the center of the fertile power, a phase of renewal and regeneration will be initiated; this also hints at the fact that obstacles and darkness have finally been defeated and that a new beginning with improved conditions is ensured.  The essential powers become effective again and support the fresh development of a new life.</p>";
	cardDescriptions[19] += "<p>B:  Problems and difficulties have been overcome, restoring of a healthy and solid condition filled with luck and success.  Full of the joys of life, it is possible to once again bring things back in balance.</p>";

	cardNames[20] = "XX:  Judgment";
	cardDescriptions[20] = "<p>A:  The final liberation from the depths of darkness is ensured by the relationship with the supernatural; in this context, a decision of overriding importance is made, which makes it possible to follow one's real vocation after a difficult period.  The relieving element consists in the fact that there are no more doubts about the decision made.</p>";
	cardDescriptions[20] += "<p>B:  The end of unpleasant times is ensured by the liberation or relief from pressing burdens or suffering; this may also be expressed in the form of a change or promotion to another position.</p>";

	cardNames[21] = "XXI:  The World";
	cardDescriptions[21] = "<p>A:  The final success and the real destination have been reached.  The integration of all essential components has been effected, serving now to bring the parts of the whole -- each in its place and according to its qualities.  The coordinated levels of consciousness have been unified to an overall consciousness.  This is the fulfillment of an essential and superior cycle.</p>";
	cardDescriptions[21] += "<p>B:  The achievement of an important aim in life opens up the long sought opportunities of development and liberties for which one searched for a long time.  Now, life is exposed to changes which a person can only determine himself and alone.</p>";

	cardNames[22] = "Ace of Wands";
	cardDescriptions[22] = "<p>On the basis of energetic action, something is created, erected, achieved or started.  Under favorable circumstances, a promising enterprise is started with all energy and creativity and thereby constitutes the prerequisite for a further good development.</p>";
	
	cardNames[23] = "Ace of Disks";
	cardDescriptions[23] = "<p>This is the best condition for material luck and success, especially with regard to financial plans, as well as to the basis of existence.  An optimal return or profit can be realized with a minimum of investment on the basis of the existing means and values; an increase in value can be expected.</p>";
	
	cardNames[24] = "Ace of Swords";
	cardDescriptions[24] = "<p>Conflicts, worries or strained relationships can still be solved or overcome in their inital stage by thinking about them rationally; otherwise, they threaten to escalate.  A matter-of-fact and reasonable discussion help to dissolve existing conflicts, which might otherwise cause even more problems.</p>";

	cardNames[25] = "Ace of Cups";
	cardDescriptions[25] = "<p>This is the beginning of an emotional relationship or commitment which is characterized by a high degree of confidence, sympathy and affection -- a good basis for a relationship with a long-term nature.  The comprehensive parallelism of these emotions is usually called love.</p>";

	cardNames[26] = "2 of Wands";
	cardDescriptions[26] = "<p>Zodiac Sign:  Aries (3/21 - 3/30)</p><p>A plan must be prepared and worked out diligently, before it can be translated into action.  Premature striving for results or ambition still lack any realistic basis, because at present only well thought out and small steps are possible.</p>";

	cardNames[27] = "2 of Disks";
	cardDescriptions[27] = "<p>Zodiac Sign:  Capricorn (12/22 - 12/30)</p><p>When there are only limited financial or other means at disposal, there must be a careful evaluation of the use of these resources.  This necessity of skillfulness in financial matters is a temporary economic bottleneck which, however, can be overcome.</p>";

	cardNames[28] = "2 of Swords";
	cardDescriptions[28] = "<p>Zodiac Sign:  Libra (9/23 - 10/2)</p><p>This is a stalemate during which arguments and counterarguments equally oppose each other.  This dilemma is characterized by inconstancy and indecision, which have provoked a standstill.  In this case, a compromise does not lead to any solution, which must be found differently for each individual case.</p>";

	cardNames[29] = "2 of Cups";
	cardDescriptions[29] = "<p>Zodiac Sign:  Cancer (6/21 - 7/1)</p><p>A friendship characterized by confidence and faithfulness.  The search for affection and reciprocation of emotions with the partner, as well as the striving for mutual care and harmony in the partnership.  The development of emotional bonds of love, in which a still existing skepticism is progressively smoothed out; both partners become capable of approaching and understanding each other.</p>";

	cardNames[30] = "3 of Wands";
	cardDescriptions[30] = "<p>Zodiac Sign:  Aries (3/31 - 4/10)</p><p>Cooperation as partners and colleagues will be a solid basis for further growth and development.  Working together permits the formation of a promising enterprise.  A secure basis for successful activities is created.</p>";

	cardNames[31] = "3 of Disks";
	cardDescriptions[31] = "<p>Zodiac Sign:  Capricorn (12/31 - 1/9)</p><p>Achievements, above all in art or handicraft, will be acknowledged and admired; this ensures a fundamental protection of the economic situation -- a livelihood that guarantees survival.  Personal skills and capability have proved themselves worthwhile and promise a legitimate success.</p>";

	cardNames[32] = "3 of Swords";
	cardDescriptions[32] = "<p>Zodiac Sign:  Libra (10/3 - 10/12)</p><p>Uncertainty or confusion.  They arise through the efforts to come to a decision, because other people interfere, also in the form of emotions.  These uncertainties can only be dispelled by a sensible arrangement of thoughts and elimination of emotions.</p>";

	cardNames[33] = "3 of Cups";
	cardDescriptions[33] = "<p>Zodiac Sign:  Cancer (7/2 - 7/11)</p><p>Common joy and well-being.  Salvation and recovery are ensured by inner sincerity or moral support.  A familiar and casual communication with one another creates an encouraging atmosphere, which offers or reinforces the opportunity of recovery and diversion.</p>";

	cardNames[34] = "4 of Wands";
	cardDescriptions[34] = "<p>Zodiac Sign:  Aries (4/11 - 4/20)</p><p>The joining together into a firm community creates a secure and enduring basis for future projects.  The completion of the prerequisites for further growth will be carried out under favorable circumstances.  There is also a meeting with common enterprises, social gatherings, etc.</p>";

	cardNames[35] = "4 of Disks";
	cardDescriptions[35] = "<p>Zodiac Sign:  Capricorn (1/10 - 1/19)</p><p>Property and goods, values and money are collected and maintained, even retained, in order to guarantee long-term security in material terms.  At first, a sufficient living is secured thereby, but this may get out of control due to greed or acquisitiveness.  In the end, the property is only maintained without really growing.</p>";

	cardNames[36] = "4 of Swords";
	cardDescriptions[36] = "<p>Zodiac Sign:  Libra (10/13 - 10/22)</p><p>Reflection upon past experiences.  After setbacks, usually concerning health or financial matters, a phase of calmness has begun, which can be used for recovery, but which also serves to recall one's own forces and possibilities.</p>";

	cardNames[37] = "4 of Cups";
	cardDescriptions[37] = "<p>Zodiac Sign:  Cancer (7/12 - 7/21)</p><p>A depressed mood or reluctance evoked by weariness or satiety, results in self-examination and retreat from others.  In a phase of depression, it is common to indulge in brooding and self-pity so that little joy may be expected.</p>";

	cardNames[38] = "5 of Wands";
	cardDescriptions[38] = "<p>Zodiac Sign:  Leo (7/22 - 8/1)</p><p>Projects are obstucted; one gets into difficulties, which may even entail the interruption of work or activities.  This is permitted if the resistance and obstacles become too big forcing a retreat.  In this way a chance exists to gather quietly new forces of energy.</p>";

	cardNames[39] = "5 of Disks";
	cardDescriptions[39] = "<p>Zodiac Sign:  Taurus (4/21 - 4/30)</p><p>A confrontation with unpleasant financial or other losses provoked by unexpected expenses or fees and taxes not paid in time.  The bare necessities for survival remain, but the resulting distress will seem oppressive and momentous.</p>";

	cardNames[40] = "5 of Swords";
	cardDescriptions[40] = "<p>Zodiac Sign:  Aquarius (1/20 - 1/29)</p><p>After disputes, one is confronted with refusal.  Although a conflict has obviously be settled, others have taken advantage of a momentary weakness.  It is advisable to remain calm and to concentrate on the obvious and the essential.</p>";

	cardNames[41] = "5 of Cups";
	cardDescriptions[41] = "<p>Zodiac Sign:  Scorpio (10/23 - 11/2)</p><p>A disappointment connected with a certain loss of confidence.  The situation is difficult to understand, because no explanation exists which might offer any acceptable clarification.  This may totally destroy a partnership.</p>";

	cardNames[42] = "6 of Wands";
	cardDescriptions[42] = "<p>Zodiac Sign:  Leo (8/2 - 8/11)</p><p>The initiative is taken and a clearly defined task is tackled.  The situation requires quick and resolute action now, because all in all the conditions are favorable and helpful in order to carry through this plan and to tackle it.</p>";

	cardNames[43] = "6 of Disks";
	cardDescriptions[43] = "<p>Zodiac Sign:  Taurus (5/1 - 5/10)</p><p>One shares in the riches of others by receiving a present or by accepting help from friends.  Support in granted, maybe in the form of a permission or a subsidy, a unique event without making any direct personal concession.</p>";

	cardNames[44] = "6 of Swords";
	cardDescriptions[44] = "<p>Zodiac Sign:  Aquarius (1/30 - 2/8)</p><p>Face to a difficult and obscure situation, a striving for ways out, in order to cope with the difficulties or problems on unknown paths.  Avoiding conflicts temporarily brings about reassurance; however, this should not degenerate into a total flight from these conflicts.</p>";

	cardNames[45] = "6 of Cups";
	cardDescriptions[45] = "<p>Zodiac Sign:  Scorpio (11/3 - 11/12)</p><p>There is a demand for change in a partnership. e.g. concerning the living together, the mutual relationship; this is usually triggered off by extraordinary thoughts during meetings, which can reveal totally different possibilities.</p>";

	cardNames[46] = "7 of Wands";
	cardDescriptions[46] = "<p>Zodiac Sign:  Leo (8/12 - 8/22)</p><p>A project can only be promoted with great difficulty, and through the removal of some resistance, but there are good chances of success.  A breakthrough becomes possible due to endurance of the focused and creative use of energies.</p>";

	cardNames[47] = "7 of Disks";
	cardDescriptions[47] = "<p>Zodiac Sign:  Taurus (5/11 - 5/20)</p><p>Reasonable profits are gained from previous efforts and can be of further use in the form of secure investments, either in the form of reserves or new investments.  However, one should not allow these means to get totally out of control or loan them to someone because there might be losses.</p>";

	cardNames[48] = "7 of Swords";
	cardDescriptions[48] = "<p>Zodiac Sign:  Aquarius (2/9 - 2/18)</p><p>Aims, plans or wishes strived for can be realized and reached when dealt with carefully.  However, some things appear more pleasant and closer in imagination than in reality, which calls for restraint against behavior too carefully thought out.</p>";

	cardNames[49] = "7 of Cups";
	cardDescriptions[49] = "<p>Zodiac Sign:  Scorpio (11/13 - 11/22)</p><p>Imagination and dreams reflect an ideal which lacks a genuine basis.  Wishful thinking or illusion leads to expectations which have been too ambitious or which have been fulfilled too quickly; a moment of fleeting luck is overrated.</p>";

	cardNames[50] = "8 of Wands";
	cardDescriptions[50] = "<p>Zodiac Sign:  Sagittarius (11/23 - 12/2)</p><p>Projects are easily comprehensible, tasks can be solved without difficulty; there enough creativity to measure up to future expectations.  Encounters bring about new impulses and dynamism so that it is much easier to advance.</p>";

	cardNames[51] = "8 of Disks";
	cardDescriptions[51] = "<p>Zodiac Sign:  Virgo (8/23 - 9/1)</p><p>There are negotiations leading to improved economic conditions.  The reliable and diligent management of entrusted values or means will be rewarded.  This has a favorable influence on the personal career -- an advancement can be expected.</p>";

	cardNames[52] = "8 of Swords";
	cardDescriptions[52] = "<p>Zodiac Sign:  Gemini (5/21 - 5/31)</p><p>One is confronted with critique, reproaches and also accusations which are not avoidable.  One is exposed to external pressure which prevents free decisions as long as one lets oneself be carried away by emotions.  This crisis can be overcome by skillful arguments.</p>";

	cardNames[53] = "8 of Cups";
	cardDescriptions[53] = "<p>Zodiac Sign:  Pisces (2/19 - 2/28)</p><p>The turning to a truly intense relationship goes along with the simultaneous turning away from superficial trifles.  A partnership experiences an inner change due to a new relationship of personal trust, which is sustained by mutual respect.</p>";

	cardNames[54] = "9 of Wands";
	cardDescriptions[54] = "<p>Zodiac Sign:  Sagittarius (12/3 - 12/12)</p><p>The bounds of possibility are reached because the demands are increased and can only be met by making excessive physical efforts.  Trivialities use up too much energy, so that it is hardly possible to move forward.</p>";

	cardNames[55] = "9 of Disks";
	cardDescriptions[55] = "<p>Zodiac Sign:  Virgo (9/2 - 9/11)</p><p>A certain concrete prosperity has been reached, which, however, has often been paid for dearly because other things, such as private or family life, were neglected.  Therefore, an alienation or isolation from the closest surroundings can be the consequence.</p>";

	cardNames[56] = "9 of Swords";
	cardDescriptions[56] = "<p>Zodiac Sign:  Gemini (6/1 - 6/10)</p><p>A stubborn determination, even against all reason should get things straight; however, this usually entails unnecesssary pain and grief or even a separation.  Instead of approaching a conflict rationally and in a considered way, one balks and shows severity.</p>";

	cardNames[57] = "9 of Cups";
	cardDescriptions[57] = "<p>Zodiac Sign:  Pisces (3/1 - 3/10)</p><p>Inner satisfaction and general well-being create an atmosphere of calmness and peaceful cooperation, during which one pays attention to each other.  These are the best conditions for a long-lasting and balanced relationship with equal rights for both partners.</p>";

	cardNames[58] = "10 of Wands";
	cardDescriptions[58] = "<p>Zodiac Sign:  Sagittarius (12/13 - 12/21)</p><p>The fire has gone out.  After the tiring accomplishment of tasks and projects, a phase of rest and recreation is first of all necessary.  However, there is hardly any opportunity because there will be a new beginning soon.</p>";

	cardNames[59] = "10 of Disks";
	cardDescriptions[59] = "<p>Zodiac Sign:  Virgo (9/12 - 9/22)</p><p>The circumstances allow for a carefree and dignified life, or even for prosperity; the highest standard of propery, values, etc., has been reached.  There is a lucky strike when dealing with money or valuables in trade.  There is also free access to other areas or countries.</p>";

	cardNames[60] = "10 of Swords";
	cardDescriptions[60] = "<p>Zodiac Sign:  Gemini (6/11 - 6/20)</p><p>The battle has been fought and one has once again survived.  Although a conflict has been terminated, there is a painful experience connected with it, which brings about disillusion.  However, in this way it is possible to see things and reality clearly again.</p>";

	cardNames[61] = "10 of Cups";
	cardDescriptions[61] = "<p>Zodiac Sign:  Pisces (3/11 - 3/20)</p><p>The fulfillment of a profound wish evokes abundant joy and effusiveness.  A personal goal has been reached.  The proper approach has been found, so that now a common path can really be followed.</p>";

	cardNames[62] = "King of Wands";
	cardDescriptions[62] = "<p>Zodiac Sign:  Cancer - Leo (7/12 - 8/11)</p><p>a) He is experienced, close to nature, reliable and understanding; his words have impact because they are based on personal experience; his influence is due to his dynamic vigor and to the fact that he himself takes things in hand.</p>";
	cardDescriptions[62] += "<p>b) Enterprises, which are a challenge to energetic commitment and social behavior, are successful.</p>";
	
	cardNames[63] = "King of Disks";
	cardDescriptions[63] = "<p>Zodiac Sign:  Aries - Taurus (4/11 - 5/10)</p><p>a) He is jovial, pleasure-loving, concerned about security, reliable, unhurried, eloquent and knows how to negotiate skillfully to his own advantage; he appreciates conveniences and comfortable surroundings to which end he cultivates relationships.</p>";
	cardDescriptions[63] += "<p>b) A favor is repaid; by making use of the services of a mediator, negotiations can be concluded successfully.</p>";

	cardNames[64] = "King of Swords";
	cardDescriptions[64] = "<p>Zodiac Sign:  Capricorn - Aquarius (1/10 - 2/8)</p><p>a) He is cold, severe, rational, logical, down-to-earth; he also has the matter-of-fact competence of a beaurocrat; he likes to depend on factual knowledge (also sciences) to make decisions so that he can outwardly pretend to remain neutral.</p>";
	cardDescriptions[64] += "<p>b) A decision with far-reaching consequences is made according to purely objective and logical criteria, without giving preference to somebody/something.</p>";
	
	cardNames[65] = "King of Cups";
	cardDescriptions[65] = "<p>Zodiac Sign:  Libra - Scorpio (10/13 - 11/12)</p><p>a) He is peace-loving, and aesthete, patient and obliging; he has a lot of understanding for the troubles and problems of others, because he knows them well -- at the same time, he offers his help; he also possesses a marked artistic taste.</p>";
	cardDescriptions[65] += "<p>b) Offering help, when self-help is necessary; there is a strong tendency to make friends.</p>";

	cardNames[66] = "Queen of Wands";
	cardDescriptions[66] = "<p>Zodiac Sign:  Pisces - Aries (3/11 - 4/10)</p><p>a) She is open-minded, full of initiative and dynamism; she possesses extraordinary energies and endurance so that she attains her goals in most cases and sometimes even surpasses herself; she always welcomes friends and is helpful.</p>";
	cardDescriptions[66] += "<p>b) Projects and enterprises can be carried out beyond expectations and even be concluded successfully.</p>";

	cardNames[67] = "Queen of Disks";
	cardDescriptions[67] = "<p>Zodiac Sign:  Sagittarius - Capricorn (12/13 - 1/9)</p><p>a) She is unhurried, sociable, benevolent, pleasure-loving and patient; she surrounds herself with beautiful and above all precious things, appreciates coziness and material security; but she also lets others participate in her prosperity, if she can afford it.</p>";
	cardDescriptions[67] += "<p>b) The cultivation of good relationships is rewarded, because one can count on support due to these contacts.</p>";

	cardNames[68] = "Queen of Swords";
	cardDescriptions[68] = "<p>Zodiac Sign:  Virgo - Libra (9/12 - 10/12)</p><p>a) She is reserved, troubled, dispassionate and cold; she imposes her ideas by making others become active on her behalf; due to bitter experiences and disappointments, she remains in the background and always tries to save face; this makes her looks unapproachable and pitiless.</p>";
	cardDescriptions[68] += "<p>b) Separations and disappointments, which hurt one's personality because they were provoked by intrigues, for example.</p>";

	cardNames[69] = "Queen of Cups";
	cardDescriptions[69] = "<p>Zodiac Sign:  Gemini - Cancer (6/11 - 7/11)</p><p>a) She is sympathetic, lenient, loving and intuitive; if one has gained her confidence, she is approachable and ready to help in many respects; she possesses a sense of romanticism, and a sensitivity that makes her appear somewhat sentimental.</p>";
	cardDescriptions[69] += "<p>b) Something can be gained which cannot be bought for presents or money.</p>";

	cardNames[70] = "Knight of Wands";
	cardDescriptions[70] = "<p>Zodiac Sign:  Scorpio - Sagittarius (11/13 - 12/12)</p><p>a) He is enterprising, likes speed, is prepared to take a risk, and is looking for a change in order to find new stimulations.</p>";
	cardDescriptions[70] += "<p>b) A change is brought about rapidly; the change itself can be caused, for example, by a change in residence, job, or field of work, as well as by travel.</p>";

	cardNames[71] = "Knight of Disks";
	cardDescriptions[71] = "<p>Zodiac Sign:  Leo - Virgo (8/12 - 9/11)</p><p>a) He is rooted in the soil, imperturbable, responsible and vigilant; he remains composed and unimpressed as long as he is left in peace.</p>";
	cardDescriptions[71] += "<p>b) Agreements must be kept; deviations or even one-sided, implicit changes will cause the immediate end of a relationship.</p>";

	cardNames[72] = "Knight of Swords";
	cardDescriptions[72] = "<p>Zodiac Sign:  Taurus - Gemini (5/11 - 6/10)</p><p>a) He is passionate, hot-headed, uncompromising and relentless; he likes to oppose for the sake of opposition, or he follows his opinion in an unflustered, even stubborn and hardly calculable way.</p>";
	cardDescriptions[72] += "<p>b) Unpleasant conflicts, which might even lead to dispute, because it is extremely difficult to adapt oneself to the situation or to find a starting point for a common solution.</p>";

	cardNames[73] = "Knight of Cups";
	cardDescriptions[73] = "<p>Zodiac Sign:  Aquarius - Pisces (2/9 - 3/10)</p><p>a) He is sensitive, flattering, sociable and artistic; he knows how to insinuate himself into the good graces of others, to win them over, to conquer them and to break hearts after a flirt.</p>";
	cardDescriptions[73] += "<p>b) Social gatherings, events, also concerts; in this atmosphere, a heart can be lost, at least temporarily, to something or somebody; a pleasant diversion providing relaxation.</p>";

	cardNames[74] = "Page of Wands";
	cardDescriptions[74] = "<p>a) He is adventurous, vivid, eager to learn and bold; he has a tendency to experience things himself, to test new things immediately in order to know the possibilities through practical application.</p>";
	cardDescriptions[74] += "<p>b) The direct and rapid transmission of a message, e.g. via the phone; the receipt of a message causes new activities.</p>";

	cardNames[75] = "Page of Disks";
	cardDescriptions[75] = "<p>a) He is unhurried, awkward, ponderous and playful; he has a tendency to make heavy weather of many things; by taking his time and making efforts he arduously tries to cope with things.</p>";
	cardDescriptions[75] += "<p>b) The receipt of a message, usually in writing, entails a lengthy and difficult work.</p>";

	cardNames[76] = "Page of Swords";
	cardDescriptions[76] = "<p>a) He is skeptical, sensitive, precautious and inapproachable; he shows a tendency to fluctuate between different moods so that it is difficult to cope with them.</p>";
	cardDescriptions[76] += "<p>b) Carelessness often leads to avoidable conflicts; with some diplomacy and carefulness, one can easily get out of them.</p>";

	cardNames[77] = "Page of Cups";
	cardDescriptions[77] = "<p>a) He is infantile, naive, hilarious and credulous; he has a well-developed sense of always being in the center of attention, of twisting others around his little finger and of being the darling of all mothers.</p>";
	cardDescriptions[77] += "<p>b) Suddenly, somebody arrives causing a nice surprise.</p>";
}


function writePositionCaption(position)
{
	initPositionCaptions();
	
	if (position >= 1 && position <= 10)
		document.write(positionCaptions[position]);
	else
		document.write("ERROR");
}


function writeTarotDeck(position)
{
	initSelectIDs();
	initCards();
	selectedValues[i] = 0;
	
	document.write("<select name='"+selectIDs[position]+"'>");
	for (var i=0; i<NUM_CARDS; i++)
		document.write("<option>"+cardNames[i]+"</option>");
	document.write("</select>");
}


function buildForm()
{
	document.write('<form><table border="1" cellpadding="5" align="center"><tr><td width="50%">');
	var i = 1;
	
	for (i = 1; i <= 5; i++)
	{
		document.write("<p>" + i + ".  ");
		writePositionCaption(i);
		document.write("<br />");
		writeTarotDeck(i);
		document.write("</p>");
	}

	document.write("</td><td>");
	
	for (i = 6; i <= 10; i++)
	{
		document.write("<p>" + i + ".  ");
		writePositionCaption(i);
		document.write("<br />");
		writeTarotDeck(i);
		document.write("</p>");
	}
	
	document.write("</table></form>");
}

function report()
{
	var i = 0;

	for (i = 0; i < selectedValues.length-1; i++)
		selectedValues[i] = document.forms[0].elements[i].selectedIndex;
	
	var TITLE = "Celtic Cross Tarot Spread Results";
	var HEAD_SECTION = '<head><title>' + TITLE + '</title></head>';

	document.open();
	document.writeln("<html>");
	document.writeln(HEAD_SECTION);
	document.writeln("<body><font face='Tahoma'>");

	document.writeln("<h1>" + TITLE + "</h1>");
	document.writeln("<table align='center' width='66%' border='4'><tr><td><p><i>Descriptions taken from the </i>Arcus Arcanum Tarot<i> by Hansrudi Wascher and Gunter Hager.</i></p>");
	document.writeln("<blockquote><i>On the</i> <b>Major Arcanum:</b>  &quot;The meanings [...] are divided into two categories:  <b>A</b> comprises aspects which refer to the mental part of a personality, i.e. the inner spiritual world.  <b>B</b> [corresponds] to A, but the generic, outside aspects, i.e. the manifestations of the outside world in a more general context.&quot; <i>(Wascher and Hager, p. 8)</i></blockquote>");
	document.writeln("<blockquote><i>On the</i> <b>Court Cards:</b>  &quot;<b>a)</b> = as a person; <b>b)</b> = as a function&quot; <i>(Wascher and Hager, p. 60)</i></blockquote>");
	document.writeln("<p><i>Zodiac information retrieved from </i>Supertarot<i> by Paul Hughes-Barlow</i> (<a href='http://supertarot.co.uk/astrology/attributions.htm'>http://supertarot.co.uk/astrology/attributions.htm</a>).</p></td></tr></table><hr />");
// Loop through data and build paragraphs
	for (var elem = 0; elem < selectedValues.length-1; elem++)
	{
		var positionNumber = elem+1;
		document.writeln("<h2>" + positionNumber + ".  " +positionCaptions[elem+1] + " (" + cardNames[selectedValues[elem]] + ")</h2>");
		document.writeln("<p>" +  cardDescriptions[selectedValues[elem]] + "</p>");
	}

	document.writeln("<hr /><p align=center><input type='button' value='Print this report' onClick='window.print();'>");
	document.writeln("<input type='button' value='Back to lookup form' onClick='location.reload();'>");
	
	document.writeln("</font></body>");
	document.writeln("</html>");
	document.close;
}

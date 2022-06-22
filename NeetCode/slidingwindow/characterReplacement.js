/**
 * You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

 

Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
Example 2:

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
 

Constraints:

1 <= s.length <= 105
s consists of only uppercase English letters.
0 <= k <= s.length

**/
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let left = 0,
    right = 0,
    counter = 0,
    maxCounter = 0,
    mostFrequent = 0,
    cache = {};
  while (right < s.length) {
    cache[s[right]] = (cache[s[right]] || 0) + 1;
    mostFrequent = Math.max(mostFrequent, cache[s[right]]);
    counter++;
    if (counter - mostFrequent > k) {
      maxCounter = Math.max(counter - 1, maxCounter);
      counter = 0;
      left++;
      right = left;
      cache = {};
    } else {
      right++;
    }
  }
  return Math.max(maxCounter, counter);
};

console.log(characterReplacement('AABABBA', 1));
console.log(
  characterReplacement(
    'CUTQSTZSZBMBCVMQLHTHCEQCICXEKJPYEPKLUJRCUULAZRAVPVKNYQIMMYTTMRCZVSXWNFUWXEOVWQMMKMWVFRBKTVISHXUYFXYKIJUCFUMMJZMPAFDDHBALJZGWQMSDXSLYLJHDHSQXSVEEYKFQMMPRRIESRHVJBLAVLYWMTWUTMULMKRNGYBTXBLEGLTWCFEGGIQMJCXEWNKCKBLOVQOXAKBUJIWXYNVCNVGRJKPCSJPZVPUXKVVEJPUWEQPBQKGJBKRKEIQWNGHWDSRUXURWCTMRUFBOWDNPJWYKPKGUXECVQNVKNGDFRSCGJKYVCRAMHHUPTGITNPIDORQIARYILWKBKUVUBUOZFSKBUWLGOWCNMCILCMLHEFPQBMRYTMIZONXRBKXPUGAMMWXDMKDCAWOXRVQNUEAPXOFWFNSVTQCWMDFALZKOFIMKQDICYFWLDILBSPGXTELZROWSOBHNDZMOBJHFUTPUZLVYOUECDWKBZDJTJIPJHAHOFECLMPGHJSDFMENLRAJMWAQQOTTAGYQFRKNMPJVAFUPFRSZGKHCAGGBQCMCCFVOPYQYYCAQIOUBEKODXUAASRLGCHFVWURZHLSZZSISJGHSEEKKTJETSYSXTRHUAQGTLRYGQPVHCKKUUDNHNWRPOGWDSQFBRVAAPEUYFTBBDNHABKOVVLCGMTFIENQWFSWHIQDDTRBLJBYBRHYEQWETUGJWWQNJYWIBWBNWUSPFQKFFDNRZXPZALQNDXIOJWYUIKGWKUHYPMMZOIJSEBOJFOXYVQRZIDNXCZWEDVFAYYEXDYGUHCSCANKJRELKPWWHPMBBOZNJDDZAHMTDYZNVHMAYZVBRDSSIFYOTKUZXGFVZMURMPANIWSLNKYXSYCAKFFKAZPTGADMVSAPRCPMEJKLNWBUKAFKVFEMTCWIRAKSCMKNLTCFUIUTZDOYRIDXHOTQEZAERTFWXVNKSCTVGKAXRTWLKXYSMEWRRVYLHEGLWSWBRGBASLRRTYYHKXTMAKGZKPSZEOCMFWFNULIFJWXOUMXPPCVRRIYLEURKJTVQIKFYCGPLTDCFINDZSNIGFZQGOWDLRTCCYEHKXINCUYIPXQEPABLMGVNHZHOSWOCYPUJIJMVSWFYSOFRITVKSKDRHCNSTLCWZLRLYNDJVPANHXDWYKLGANHAVFDGMIZVARBDGMMESZZUIUTAYOMLKBMAIJDWVAVRURUEOHXWZGLJFWVUCPBNNDMDBGYJBQPPTHITPHWKHTUVDRJMCQDPRXXHYNQXDVYQRPSHRBZCYTUWYTFRCWIBDDOBDCNWGXUEPSEZCEVZLYHXAAOGUEILKSVWHAFLAAKXAWVBFHLJYNXNRCKHAJCLTZYPBJPFABUBQTBYXHGUZHWZJJSHWAXDOMIQZWUUXYYZQVGNIQPREBELTWDUQJJUEKIAJTUAZDXBDEHSRQYXHOXYEXGKYDMBJKJIMPEEFQRRARUDEPANMEROXGHTVKTOJFZDTGZMJLEPIXSKCWYEMERBWIDMIKFXRJUDVNRNSOCXEDAUFXFRZRTZHTKWCQHSNBRGBKHUSYIYLEAIOCIUMWRYLQXAFXRRJKLEUNQXQUOGGDQRCGKBWHSJHWYUYSWUGKIHCGPNBCOTHWIDCZOVVTBUURUSZTCJRAWTNFEQMLVBPVXSTUGZXCBKAZCCPLPGKSHUUGRGWQAAWURSUXPMZCZBPDJZVGVZPOCXOFYWMMFOCQUQGHBMHIZXEJFXXTNSNCJYHJXLLAEQFKCMQLQTIVESDRDOMJIPXXAIGXEULGRZZAMUNBHBVYJGKCLVBFTCAOBFUXOHOECQWBIGYVJGJISMPNXMKURJSMKOLUGTJJPLTZTRRVGSLWCBPOXFTJQXJJWSDMUSOZXIABESOWKYHHORVNIEOVGPDMHFSWWVGGVPSWGHDQHLDBRQNEKJXVNJKPUYAFGVJLBXADKSJWHJYEOPWDVDZWCUXBMMKAWKGJZZEMDODAWDLHHUOSDQCDCXCYGAOIDROWMMVSPNCMRBBWFMXGJEETLXIHJJSUURIRRMPGRPYINRIJGKSHKPWEZDALQEVJIGICMONLBXIPHQFJPMFMCYMWFADFKJNLZMMHCINCOGBBVKITFHENTZZQTDNWGDOPJUNHJZEJIOZXFBDPIPTDYFCUQDBCPSNUKKLVFIZTUZWPDBGXCHUOACWEBUQQNMYNCRNVKJUEDUJKYXOHWSFQWGBQHPTOWRITQALXROVQZWIOILGDXEMKZIMGRHDLGNFUMOWWQJVQIOKRRPRVULSSYGJVGTVWYNKCCYQJNAMXGVRMMCPULLSIDPQQMGMFSQWFBPTQFCSZXZBZQLZEEAQBYLFWQHKVWAWUWUYMFYQLVBWNBYFEXOFTUMOVDJYEWYORUWQWDFLNGMNHIPJLFTRFAGFRZHCOZTYHDFFRIKYRKCJOPWPUSDWLRUTKWTXTMECNBXQAVGQTXQHNYHUDMAUSYJUMAAPJUMDIJDAYBWYFHOKVWZQYWYYEQBOMARSFHEZZDYYMONCVIDGFIRDJJLTNCTPIAXJMKMBQSXNPYZPURGWYSHXWVZLOBKWNINJJYOHKWMGKNFQBQIPISJDIOJPQBXTVFEMIRSZAPEITGIFEJITKPSMFAEJFWRJCWOXMKDPVVCDPQWFTRCIOYBWALWRRWWGKXURBDRGVUCKIFTJODJQDKHCOHOFLSNLFAMWBXYZASGCBFZFGFRQVJGRDTKJKTABPPYPHWZKWRLCFKJDEABOSIJNVBBELNBMYJUKZSJBNHHXUCMAXGLYSJDBGJCHTYKJQCVPPJVNSCHRFRUEZOHGKVQLVYKENZHPIODXFTJUVRFCLQPPGAFNMZJCLGDTZCWRVNERBASFLEAJFEYGIRLFWAFSLSUXVQJUOSSYHEVVHZYMRQFDRVQVMGABPTFSFJDGGYZRGHWAQTJCYNRHDGOOCTVGHLUOZWVOJBLSQPDSQBBRGQADDQQKBOFBRUADIYPPOYPVDWUBRTUTPTMDLSFDUVWPEECKFHYXDUPVLNPPNKBSYYOFFQKEJKJMBUQYJSRUJHITJOQGMSBIHFXQOQIFQRLQDDCSOSPUOEZBLJSJZNEWNFOAOKHEEKXDCYITHYSXOYMEMNZOCAZBGEFZCWAPIZXYDKSUJHTQPGPHYPDOWEBNODTLLMYOGGUSNKKKFVMVAGDPZRJKJRRQABJZUQKOUSBIGBJAEYFYWZMPNAHQJPZVUNVUACTHACPECEBJMVVIRXHHDBUPQUWRXICTYHLSBVRCLFPMLQVLQJDDZPKZYNLQXZZIETGYBURDFXPDAABRWDCCOTYPVPFUWNRGAGLXIZLEEHSNPIVSNRSFVFRIGIKOMLUMQEVJKEEEQUAQTRSJDAXPFYMDVNOLSICQDTYKBYPQYODWREMAUZZAPHPOCBAJRTELEYGKCANGNTMKTOODJMDOHLLYDILSFMPJNCBKXSCOEQJREWSRZWIKJUIAEIIKWCDAWRDRFLXQVYMIZLKDKSSIJGJZYOKIZXWOFNHKMVUTZALRZMBSKADAZTBSRRCWJEFPBDZMWRMNERMQPMUKPBJXQKAHJOBBVVMEHAOYHLZMQHOXVIGSRMDWCNBATUSVMBFIDIYWEBWKLKWOVJROPXNDRWKWKDDQENSAGTQKGQBJUWSUKBOIJNVBJGABTOSSMVGQFAPCRGVGUSBRCUVJEMCVUFPKMEXUDSVJBEDGUVNMNBJKEVWVFFSHWOVPNUBWLZYVREWRRVGVYFMXEUIRXPNEIDEEVHJLVHSXGNYWLOCRWQUUPRZNXQEECDSYCTKFEZYXCLUBVTDSWKCFRTHKDKNORMMQNPNSZVSKSCOQTJTSGCCSHAXFLRYSBWCLTZAHCOUEAJGOHRTBVIXSQFECEVPEOKRTXFPGCTVDKDQJIPMLOGFAWGXKWRSSGNLVQIAOKJFXQGVPEIMIKKGVZGKYQXYKAAZLTJDEJXYGVCXPLYVTQQIAZBABDPAKZODIASBJJEGVOJBMKEMQEVWFBKFLZXVNGWFSTGBQMHBRSFJFENSKZJUBQFLWEMBBUQLYFYRMQCMJXPZVULTZALBZHVLCTPRBKVHRGVJDKPRUAVOEHQJCIMWSYIXNTYYTGBAPZJFODZKDYERJSBUPAPPHBNSLYKKAFNQPNZSRHSXCOQPSNWYMXCGFPPGWAPNATEBEDSJFDTZYMKEXNTGJJOZKACFNFVSEECSIOBCMINUIWNLUDSZQRFADMJGWGAOZGWPYXARPYYHPWZCESKNROBWBCSXAMMHHYPWELCPPRPQIFCVNGVXDQHULUPRRQEOMSGESICSRYEHCWECEORJFNUQVJMAOTSJNBWKTMHMKDTAVWFHZYZZIOAIKRVPITZPYSUWDVRLAUPALXXQVYTJTVEFBETLBSZBWAUZVIYUMUVTIMUZQBLMPNVSFWVMTLIFYAHSRIVICTNDZZOZHAXFPSYGHBRYDXAUZEGFMEHNZEJGJDIBHXPVYENHJOHOHDWQVGVJJDGBSITVCZYPLKXZIBHBIQPZNDDUTBYSYKNFYVBWFENYUAAVJDWHMZHIQUBZQBYIZYFKYJSKKLUSFFLMDUIHWOBZQBAZGAIFHPMORCYKUINDJOIKKKCENXJSHZMYOEGLTVBHRJPXYGHUWJSXXMYJSETKWDEDARIQPLWHZXTUGEDSCHSNMOGMZASXNEODTQVSLTVSVQBJWXCSGTCUIAOLGEKSEEFBCFVOPIKOVJONZNRMGZZZAXFOPPLICTFTNSSEFWABMXQPRIGBBUBWSXWTNQMZRYRHROHECVLVBDTLDZWTOWJUCDKPUOZNHTFOYJIALSZDCCNXTUEKXEZRWVLWRJYWCYONNZVLTOGXKWMUYJTGEVRROPFLETSGLWRUWDLPYJAXOTWMKVBPDNESLBOYOSSSFVARDTEXNHCZTVBJRQWWZJDYZKPTZCBPAXSQYUDEKWZVCHDNHUPKSOLWSHDCHXYFVEBDTXISBUCFWPCKXDHUCLTOPFJOSCCOWHYJGRNDWASIFKYECWWBTILDQJTWXNRTKNBPISULXMOFDXVNVFVLIMVHTTSFXUQCPKJPZIJUASYITFIMKVQDZBTYJBFHMYHRHYRMZWUXRBDCLTLZEUGHGNAZHVFOTEOOOKMBSTIPNATUFDWMPLGQSGPEXOJUIFZKOMHCXADOOPCZAFTIDDMLEFSFDMPGFHKNITQNZDQDEUHPYQSBJTXJFIAOONGAQMTRQDTKGWPIXSESRVPFHRMHNHNSNOIIHOOHBYRLYVBHWHSDMYZVNLVKLEEDTGQTTXDYANXZKXJZRNSTUPOCDWJILNVVDDSCTJSZJKDCEUJRETFTZBBDKXQNNLSXIRVAVSCRBQBQWBVIWPEPTPBTZOYWJNDUUVNYAMZRCKOBAKVPEPDGSMRDQCZEZEHPOXTKGMBOBXDRYJLBGIMFFVNLCLRYWUEFTBHOKZXJANRFUOBNTYSNLTKQSFDTNDOAPLTKSZBSXFJWAUNVPXYIAXXBOCLVTALHYARTBPFSUPILRNNBXFTHFJCRNANYEWYYCZGITRPYSPBPYXSNMZBMXUGWIIBNBUCKMQCCHKLZVPRMPPKMXSBKQVQSJSDGHWVFSJHLCSMQAARRPOPITAHIPJPJITNRQSICWTBVKJCZSVBJWPQJPGELEMLNSHNQIEXIMRQAKYVVNIFSIEIXHCJUBZZPCOLPWGFTHFCUTWBSWDHDUSPHZCUQIMOEXICIOEBRRFPMODZLQNEKEKFBPJTTZHMOMVOAKVYOMBOGWOIVVPUCKHSOEFKDIRQLPRHWIKXRFWXJZWNIJZXPTJARTJQTGEEYSIDKIGXMNQNPPFIJNESULETTHMXJWDOEOBWVGNSXLLBHIGFWKXBZPLQOAZDMVGKEPGREVSNRAVJBXCBWFVPZLDTNXRFCOEMOBOJEEPSABSCOTEVXVFWZNQDVTFYFZCLDIFTJKYBUAFNQJEMPFBLTJGOEFOPQACKREKFCCOOEKRVDQZGPPROJOTJOONCIYKSUOJWZULHYWPMJDPCRXRIKCAAOWWKDARYGVPGZFZBXKZOCQVHUQQAQGKTTDKPAIEYKYETDDJAUQDIPPZKFOLGKNISJUVBMSATGVVZXOMYKFTPTWASRETFOBISTNJWSTFGZXURAUDOOORMQOUNXBFDFWFUDFYMOWUAGZPKZPWCMKBUKORLYZXAMTIRYATQXXXAESNGICMYMXVUWNSUSDGHHZAXJQPTCBVUBWSBUCIXUTJUJIRDRFETQKMMREECNIPGGZHUXWAZAUTFTDXZIKCUCFVXLFBZOOVRYWEFBGQUPJDSDLPLESIBXGZHZFZKXFFEKTJMAJAZSAJXAVBERMTPEFFNRFOCEVPPUVNRIXQQQTCSVQNUWCKHEZBGYJXKMYJCIUTNIXVCAIULWIOUDSHZXZUGJDGNUQBYQPEUEGZISLMPEJJBFBREEXJKZEPEVJSQGMWCJDEAXXPUJJEMMYUPPEKARWYDMFXJXNSZLBKHOCQPIZWVDLWQSLQFAHWSIQQSBJWOCEXDOJBYIXMTLIPWQUXREGJOCSBEOCJETKQSXLGINLDEHHWXKNMEGSDEWGVHRAINVVTYNCOPKHLYPDZWQQQCXGUQXISWMEZNUYTLDFWEHCSCMYODRMAPJAUJSBXUYHAGWIULXKSXYRUYTLEOAJNBPEWIMWPQXUFUGKBWFAKRFRSVXGTZBVZIBDWODYTLGKJMSXHSFKHELYFAJAOPYSNFBQAVELIRWUSGNGVVWYBUWKWRJUNCRCQZJQSJUTKQLLXMWUOHLURQRWKDUVGFMNCDTCJOTNFLEVQWSKKHIILKGUBAWCNJFGSLMTGQADDNZENJQBTYRTVXCJYTFMNXCNUGBTKWOZMLBAJEBCEHOZSSUSYWEGVLDJPHPNEHQDUPRRKIGWJLXBJALUYQQPVTEVREDIHLBXPWWPLZIIPWDBNAIUACHLTPFRUBERZGBRZKSNDFOMFDCHQXEUWRWVHYIRQKDSCCQWMZNEBQSBKHNNYHXSDWPPPSVYAFFSWIRDBEIGNBDILUWMTXAIAAQOUZSSQYUQEGQCDEXPNKDWOSXBFRWQHOXLPNPPQMQFBQQNKGRSLHJJQOECCIRTEGTHIDNZOSEMSUHZCBQGUNUOVJSILDUUIRFONLSWUJDMSZYSPZITJTIDOXEXVHUCVULHDYEGSIZWQFLZVWDNCEXZRDZILLKBUQHUFXIVLAPYGYFTUNAVCUYEHWZWJHQXWWLRPERVMJIQADVNMASOYPQSXITDPCWMEFEJGZUKCCYMPIWHGXVUUQZCAZLXIYIHJUAVTLACTSYESSDFWHDYDHYAPETWKTZVQLOVFYMMCKPGQZGMRFSALGJXXUXLTMOQSYQBAKBJMLXVKTXZXHXYXTRAKRDIONDBZVLCDKBQMPBIVXLXXKNDPTCZFNLINXJIJZZKBNBTMTDNIULDLHSAQSPXZKXDTBKVVCYZKGFNKPPGCWVWLNPJRJKAJAPLJDCVPOHVRUCBMLWGIAJTWBUOZGDRBPCLUWFIWDGMNWONHDISLCUHYYYLGHGQEORYEFGYFRHQBKRKFPICJNMEWTEATTSTYOYLQHLNALECIZMWNBCQMVBWFSPSYCZPVZYXPDNYQWVFRVAWWHTYHWEPIKDHJCUCAREYZKERRCXQKVUKPWGFUJPYQAEFXYQLMCTAGCZHDOBJREYXQCXIBPRUMVJNPCJDBMPQQQUDCENPVLMYJPBBXZRLEJXECCIIWHONWQPDKYRWCKLFMVLPFXCSNERJLOEWHUGFEOGNZWBHAXRKDGGVTQBWGYEIFRJQBFNKGSQECQJVEZXOZRDJNTCYYEOFPSEYKJAMJTXQUFRARYDGZCNRYSIUNGBZXRAZOXFZVMEEEQJYLGWMYRIRVZDFOHZMPQPYRQNHLEPVLHXNUNWKAHSOWLATKJCDZDPEWUEWTKQMAZSJPVOQCUBJRERXRRJOGWHVZJUJXXJZMLCSLPEPMBGGULNYGCTPPDSERBNUAAZRKUYXRCIWLQZDREJEPKPPAVLOQDJNXCAIQWDAVCMOQRHOWTRPHONBVRMIQAZKLPEPDYCZAGCWETPIECCITHJGDWOHYCMJLJVXFBXJNWSOAOXBWBCAIOLGHAGNWOEEOMXHDVWVSFKFZTQISTBFXVCERUAOEUQZMGBJMODTZPTNHKGYYRPGRAMNDMACMLBKZDHMVNKKGCSJVMQOGDOLCWYYDKWWCBPPVRSVEKDUUDOIVWWFMBIAUDGDIWOGAMXVOOSQOOVAOVNUYNYSLNYRIVBBTBMPUXUCORMRMBYVDDGTPOWZRFYLVRJDWYMGDYFPTPEJSUFNITSPSBCQZHTCUSMZFDTSSNBGHPQHRWCRMATJIPJCRPVGIOCWFNVOCYYHEUQEADNUHRWNPDEKWPOHJGLLWNJKCWJJGHXROZSEWQGRYTIFANKGCQNTUJDKTIMDIPRYCVJEYHAHNLBXKXYMNBLUNUNPSXQCHWKFBBPSQCJNPZGHGEQJICGDMGQOMCXQXFGXACNPXCYBTJTVJYJEQAYCGXSHUONCNGIYWOFIBFEWWECBLEVYQMXZEALYMIFLSIZCBKOJAOSFKESVEEFWMMWMKCDZVGOLGGSUFLHEVFJBSEOQTORDWCUNKYMOUMFOKKVZTWLTAYCCFXEYYGXDIHFVIUKYJTBNZUYDOPJGEZMUPCPJXLMOSXTBGCVMMCUOUKCZQEKUNOQPCDLZJSLBOENWKDCYKFWYNOCTFQAGXRLCJJFFROJUGGLZKIBGXHIAMIYRBWVUYSSJCMFVBQSHJOMXOFCMTTDIUPYRMGDRACBPQZCHXKZOWUOQRWZTGDEBILBMNGEAJWRXMUDRUODXGSUCCNMUPYWABYZZBUZOPRGUXYFBZYHIQLOCTRANAQGCRFATDBADZMSYFJHCMZJEJZLXLIZVQTDLSJNIOXNTXNILOSEEFVQQZYGQUGZCUNHEEEPXYPHQJUHHMKUAMYHXWROSTAEYSHGXIJKAOXIESLOBICIRZMVAOKEFTJRXGOOHHGRFEWVXMSEHPTPUKUQZCOWFQFVAIOAITOVYQSZNRLTZSNOKCWIDNWMICTQUGJDJXMUJLNIGVBPCVAROSANVUPWWHCFVDSUVVFDBXQBVWBALEGBQOGIKKIHNWWUTDHBGEZUMEVHBTRSAKAYGYOSFEKPZRUBZQWATYHMSDBOCUZTMJEULVROFNNHXAEOGKHVFNEUISWISTUDLAOWEFXIIFEIXPWSJZAKXPSJFCJTBCDVSTAGGCAKECUQPIMCDXBGUAATNDTKDVVQPLMQQGOCWSEDNNACJCHLGDJOJZUANACMTURVPONNOHRIOSBGCKHTYNVCVBVNXLDOLOFFIGVKXQVUNHDBUGPNTBFODMHHNDUGPTRFSZPFRQUDMUHVRKXDTZNDHJLCMMDKOXROGQKQPWLSCVZMUHOLNOWFBZYAPBMCDXAZEMJNWLUFNJOZQHWHSEMZEUQZBEJTDGERQGTACWPWWIDKJMBFDZCYTCZLDDGVPVJAFAJODLFJQMKTNCHOZFEZJUFIQMDKUZKABARZTGYAJDUMKLCOCKOAGLIEHHRQSTITNCYTCXMNHZJWEFPJDROKIQULNMMMLTJNCOCHSTTOHORDAALCSDRNRWFSVAKHLBVJTTXVBDKRWYFMJNYQQKIBAMLITRKMHEZNFBIWDWVBOHSRODSLOBCFCGXHDCEGMOTAFOFWUTIOFIKJLDQKFBXDLNZWCMJTFEZONCKOURMZURYSQWYXWMSNXSXYBRYYKBHFUENSZGYEICSJNXSMBOOJAHWXRCKCRKOPRZWNXMUMEVBNJYKDAHPSTUUNCQCHRUYWZULAWNSZMGZCNZIGHPBXSOEGSALRIYXFPFFGBCIZUCMFZUEFGAYQKBQJRQHJJHCGKHFCBNBRAISTMUHSKQSXBDBLAFZRTVOSKLGLBKOLMYLZTEDRZOARTZVVSWRVXSVMZXGIAEDDDKPSPPENZGDIK',
    100
  )
);

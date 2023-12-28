const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("AIzaSyB_evRoaXWH77p3skPjlNvQdvTs1Z3qXyI");

async function run() {
  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const prompt = `i like the book "IT by Stephen King", now rephrase this part of a passage in a way that i might enjoy "On China’s snowy border with Russia, a dealership that sells trucks has seen its sales double in the past year thanks to Russian customers. China’s exports to its neighbor are so strong that Chinese construction workers built warehouses and 20-story office towers at the border this summer.

  The border town Heihe is a microcosm of China’s ever closer economic relationship with Russia. China is profiting from Russia’s invasion of Ukraine, which has led Russia to switch from the West to China for purchases of everything from cars to computer chips.
  
  Russia, in turn, has sold oil and natural gas to China at deep discounts. Russian chocolates, sausages and other consumer goods have become plentiful in Chinese supermarkets. Trade between Russia and China surpassed $200 billion in the first 11 months of this year, a level the countries had not expected to reach until 2024.
  
  
  
  Russia’s war in Ukraine has also gotten an image boost from China. State media disseminates a steady diet of Russian propaganda in China and around the world. Russia is so popular in China that social media influencers flock to Harbin, the capital of China’s northernmost province in the east, Heilongjiang, to pose in Russian garb in front of a former Russian cathedral there. Xi Jinping, China’s top leader, and Russia’s president, Vladimir V. Putin, have made numerous public demonstrations of the nations’ close ties. Mr. Xi visited Harbin in early September and declared Heilongjiang to be China’s “gateway to the north.” China’s exports to Russia soared 69 percent in the first 11 months of this year compared with the same period in 2021, before the invasion of Ukraine.
  
  “Maintaining and developing China-Russian relations well is a strategic choice made by both sides on the basis of the fundamental interests of the two peoples,” Mr. Xi said as he met in Beijing on Wednesday with the Russian prime minister, Mikhail Mishustin.
  
  China has filled a critical import need for Russia, which many European and American companies shunned after Mr. Putin started his war in February 2022. China has pursued its role as a substitute supplier of goods despite risking its close economic ties with many European nations.
  
  Editors’ Picks
  
  
  
  I Have to Buy New Jeans. Help!
  
  
  
  Just How Rich Were the McCallisters in ‘Home Alone’?
  
  
  
  It’s Christmastime in the Cosmos
  
  
  
  Before the Ukraine invasion, leaders of Germany, France and other European countries mostly set aside differences with China over issues like human rights to emphasize commerce. Chinese officials, for their part, insist that they should not be forced to choose between Europe and Russia, and that China should be free to do business with both.
  
  The biggest winners for China from the surge in trade with Russia have been its vehicle manufacturers. On a recent afternoon in Heihe, lines of diesel freight trucks with decals of snarling bears, a symbol of Russia, on their drivers’ doors waited to be driven across an Amur River bridge to Russia. The bridge is new, and so are the trucks, which wore Genlyon badges, a brand that belongs to the state-owned Shanghai Automotive Industry Corporation. The company, known as SAIC, also makes car brands like MG, acquired from Britain.
  
  
  
  The sales helped China overtake Japan this year as the world’s largest car exporter. German manufacturers like Mercedes-Benz and BMW used to be strong sellers in Russia, but they have pulled out in response to sanctions on the country by Europe, the United States and their allies.
  
  Sales of luxury cars in Russia have plunged, contributing to a decline in the overall size of the country’s car market, which is now less than half the size of Germany’s. But lower-middle-class and poor Russian families, whose members make up the bulk of the soldiers fighting the war, have stepped up purchases of affordable Chinese cars, according to Alexander Gabuev, the director of the Carnegie Russia Eurasia Center.
  
  One reason, Mr. Gabuev said, are the death and disability payments that the Russian government and insurers are making to families of Russian soldiers — as much as $90,000 in the case of a death.
  
  Russia has not released the number of its killed and wounded, but the United States estimates the total at 315,000.
  
  Russians buy almost exclusively internal combustion cars. China has a surplus of them because its consumers have shifted swiftly to electric cars. And the land border means China can transport cars to Russia by rail, an important factor because China lacks its own fleet of transoceanic carrier ships for vehicle exports.
  
  The result? Chinese carmakers have grabbed 55 percent of the Russian market, according to GlobalData Automotive. They had 8 percent in 2021.
  
  “Never before have we seen automakers from a single country gobble up so much market share so quickly — the Chinese came into a windfall,” said Michael Dunne, an Asia automotive consultant in San Diego.
  
  
  
  The United States has strongly warned China against sending armaments to Russia, and has not yet uncovered evidence that it is doing so. But some civilian equipment that China is selling to Russia, like drones and trucks, also has military uses.
  
  Beijing’s embrace of Russia has also provided a modest but timely boon to China’s construction industry. The economy has struggled to heal from the scars left by almost three years of stringent “zero Covid” measures.
  
  The real estate market is in crisis across China. Tens of millions of apartments are empty or unfinished, and new projects have stalled — depriving the construction sector of work that has long powered jobs.
  
  “Many buildings have been built, but without anyone living inside,” said Zhang Yan, a wooden door vendor in Heihe. But some laborers are finding work on the 2,600-mile Russian border, which until this year had a dearth of truck stops, customs processing centers, rail yards, pipelines and other infrastructure. Construction moved ahead briskly over the summer in cities like Heihe, although it has paused for the frigid winter.
  
  Pipelines are needed for one of the most crucial commodities traded between the two countries: energy.
  
  Cheap Russian energy, bypassing sanctions imposed by the West, has helped Chinese factories compete in global markets even as their manufacturing rivals elsewhere, notably in Germany, have faced sharply higher energy costs for much of the past two years.
  
  Russia has been ramping up natural gas shipments through its Power of Siberia pipeline to China, and has been negotiating to build a second one that would carry gas from fields that served Europe before the Ukraine war. China and Russia also agreed less than three weeks before the Ukraine war to build a third, smaller pipeline that would carry gas from easternmost Russia to northeastern China, and construction on that project has raced ahead.
  
  
  
  The newest pipeline will cross land that Russia seized from China in the late 1850s and never returned. As recently as the 1960s, China and the Soviet Union were quarreling over the placement of their border and their troops skirmished. In a village near Heihe, a larger-than-life-size statue of an imperial Chinese general still glares across the Amur River.
  
  Today Russia and China are building bridges and pipelines that cross it."`

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

run();
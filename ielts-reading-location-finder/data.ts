import { Paragraph, Question } from './types';

export const PASSAGE_DATA: Paragraph[] = [
  {
    id: 'A',
    sentences: [
      { id: 'A1', text: 'Taxonomic history has been made this week, at least according In the World Wildlife Fund (WWF). a conservation group.' },
      { id: 'A2', text: 'Scientists have described a new species of clouded leopard from the tropical forests of Indonesia with spots (or “clouds", as they are poetically known; smaller than those of other clouded leopards, with fur a little darker and with a double as opposed to a "partial double" stripe down its back.' }
    ]
  },
  {
    id: 'B',
    sentences: [
      { id: 'B1', text: 'However, no previously unknown beast has suddenly leapt out from the forest.' },
      { id: 'B2', text: 'In-stead, some scientists have proposed a change in the official taxonomic accounting system of clouded leopards.' },
      { id: 'B3', text: 'Where there were four subspecies there will likely now be two species.' },
      { id: 'B4', text: 'A genetic analysis and a closer inspection of museum specimens’ coals published in Current Biology has found no relevant difference between three subspecies described 50 years ago from continental Asia and from the Hainan and Taiwan islands.' },
      { id: 'B5', text: 'The 5.000-11,000 clouded leopards on Borneo, the 3,000 -7,000 on Sumatra, and the remaining few on the nearby Batu islands can now, the authors say, claim a more elevated distinction as a species.' }
    ]
  },
  {
    id: 'C',
    sentences: [
      { id: 'C1', text: 'What this actually means is fuzzy and whether it is scientifically important is questionable.' },
      { id: 'C2', text: 'In any case, biologists do not agree what species and subspecies are.' },
      { id: 'C3', text: 'Creatures are given Latin first and second names (corresponding to a genus and species) according to the convention of Carl von Linné, who was born 300 years ago this May.' },
      { id: 'C4', text: 'But Linneaus, as he is more commonly known, thought of species as perfectly discrete units created by God.' },
      { id: 'C5', text: 'Darwinism has them as mutable things, generated gradually over time by natural selection.' },
      { id: 'C6', text: 'So, delineating when enough variation has evolved to justify a new category is largely a matter of taste.' }
    ]
  },
  {
    id: 'D',
    sentences: [
      { id: 'D1', text: 'Take ants and butterflies.' },
      { id: 'D2', text: 'Ant experts have recently been waging a war against all types of species subdivision.' },
      { id: 'D3', text: 'Lepidopterists, on the other hand, cling to the double barrel second names from their discipline’s 19th-century tradition, and categorise many local subclasses within species found over wide areas.' },
      { id: 'D4', text: 'Thus, it would be futile - if one were so inclined - to attempt to compare the diversity of ant and butterfly populations.' }
    ]
  },
  {
    id: 'E',
    sentences: [
      { id: 'E1', text: 'The traditional way around the problem is to call a species all members of a group that share the same gene pool.' },
      { id: 'E2', text: 'They can mate together and produce fertile offspring.' },
      { id: 'E3', text: 'Whether Indonesian clouded leopards can make cubs with continental ones remains unknown but seems probable.' },
      { id: 'E4', text: 'Instead, the claim this week is that genetics and slight differences in fur patterning are enough to justify rebranding the clouded leopard as two significant types.' },
      { id: 'E5', text: 'Genetically, that makes sense if many DNA variations correlate perfectly between members of the two groups.' },
      { id: 'E6', text: 'The authors did find some correlation, but they looked for it in only three Indonesian animals.' },
      { id: 'E7', text: 'A larger sample would have been more difficult.' }
    ]
  },
  {
    id: 'F',
    sentences: [
      { id: 'F1', text: 'One thing is abundantly clear: conservationists who are trying to stop the destruction of the leopards’ habitat in Borneo and Sumatra see the announcement of a new species of big cat as a means to gain publicity and political capital.' },
      { id: 'F2', text: 'Upgrading subspecies to species is a strategy which James Mallet, of University College London, likes to call species inflation.' },
      { id: 'F3', text: 'It is a common by-product of genetic analysis, which can reveal differences between populations that the eye cannot.' },
      { id: 'F4', text: 'Creating ever more detailed genetic categories means creating smaller and increasingly restricted populations of more species.' },
      { id: 'F5', text: 'The trouble is that risks devaluing the importance of the term “species”.' }
    ]
  },
  {
    id: 'G',
    sentences: [
      { id: 'G1', text: 'The problem of redefining species by genetics is the creation of taxonomic confusion, a potentially serious difficulty for conservationists and others.' },
      { id: 'G2', text: 'The recent proposal to add the polar bear to the list of animals protected under America’s Endangered Species Act is an example.' },
      { id: 'G3', text: 'That seems all well and good.' },
      { id: 'G4', text: 'However, study the genetics and it transpires that polar bears are closer to some brown bears, than some brown hears are to each other.' },
      { id: 'G5', text: 'Go by the genes and it seems that the polar bear would not count as a species in its own right (and thus might not enjoy the protection afforded to species) but should be labelled a subspecies of the brown bear.' }
    ]
  }
];

export const QUESTIONS_DATA: Question[] = [
  { id: 1, text: "Q1", questionText: "How it is generally accepted that different species are named", correctLocation: "C3" },
  { id: 2, text: "Q2", questionText: "The reason that conservationists are happy with the apparent discovery of a new species of leopard", correctLocation: "F1" },
  { id: 3, text: "Q3", questionText: "How genes could cause a potential problem for conservationists", correctLocation: "G4" },
  { id: 4, text: "Q4", questionText: "Some scientists want to change the way clouded leopards are classified into species and subspecies.", correctLocation: "B2" },
  { id: 5, text: "Q5", questionText: "It is difficult to decide exactly when there is enough _____ to say an animal is a new species.", correctLocation: "C5" },
  { id: 6, text: "Q6", questionText: "It is _____ to compare the number of species of ant and butterfly.", correctLocation: "D4" },
  { id: 7, text: "Q7", questionText: "Generally, animals of the same species can make _____ together.", correctLocation: "E2" },
  { id: 8, text: "Q8", questionText: "Some scientists claim that genetics has led to _____ rather than the actual discovery of new species.", correctLocation: "F1" },
  { id: 9, text: "Q9", questionText: "The possible new species of leopard appears different in two ways.", correctLocation: "A2" },
  { id: 10, text: "Q10", questionText: "Darwinism created a problem with how species are defined.", correctLocation: "C4" },
  { id: 11, text: "Q11", questionText: "Lepidopterists study ants.", correctLocation: "D1" },
  { id: 12, text: "Q12", questionText: "Scientists are going to study more clouded leopards in Indonesia.", correctLocation: "E3" },
  { id: 13, text: "Q13", questionText: "The writer believes that polar bears are not a species in their own right.", correctLocation: "G3" }
];

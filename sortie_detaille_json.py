import math

mois = ["janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre"]

def sortie_detaille_json(initial, ajout, interet, ans) :
  interet_cumule = 0
  ajout_cumule = 0
  total_cumule = 0
  calculated_initial = initial

  result = {}

  for annee in range(1, ans+1, 1) :
    dict_annee = {}
    for quinzaine in range(24, 0, -1) :
      dict_quinzaine = {}
      text_printed = "{:<15}".format(str(annee)) + " | "
      calculated_ajout = 0
      if quinzaine == 24 :
        calculated_ajout = calculated_initial + ajout
      else :
        calculated_ajout = ajout

      dict_quinzaine["mois"] = str(mois[12 - math.ceil(quinzaine/2)])
      dict_quinzaine["ajout"] = str(calculated_ajout)
      dict_quinzaine["interet"] = str(math.ceil((calculated_ajout * (interet/100) * (quinzaine/24)) * 100) / 100)

      interet_cumule += calculated_ajout * (interet/100) * (quinzaine/24)
      if annee == 1 :
        ajout_cumule += calculated_ajout
      else :
        ajout_cumule += ajout
      dict_quinzaine["ajout_cumule"] = str(ajout_cumule)
      dict_quinzaine["interet_cumule"] = str(math.ceil(interet_cumule * 100) / 100)
      
      dict_annee[str(quinzaine)] = dict_quinzaine

    total_cumule = interet_cumule + ajout_cumule
    calculated_initial = total_cumule

    result[str(annee)] = dict_annee
  total_cumule = interet_cumule + ajout_cumule
    
  result["interet_cumule"] = interet_cumule
  result["ajout_cumule"] = ajout_cumule
  result["total_cumule"] = total_cumule
  return result

print(sortie_detaille_json(30, 25, 6, 2))
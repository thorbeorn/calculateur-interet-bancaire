def ajout_complexe(entree_complexe, interet) :
  interet_cumule = 0
  ajout_cumule = 0
  total_cumule = 0
  
  calculated_initial = 0
  for annee, annee_value in entree_complexe.items() :
    for quinzaine, quinzaine_value in annee_value.items() :
      cumulated_ajout = 0
      calculated_ajout = calculated_initial
      if "depot" in quinzaine_value.keys() :
        calculated_ajout += float(quinzaine_value["depot"])
        cumulated_ajout += float(quinzaine_value["depot"])
        ajout_cumule += float(cumulated_ajout)
        interet_cumule += float(calculated_ajout) * (interet/100) * (int(quinzaine)/24)
      else :
        calculated_ajout += float(quinzaine_value["retrait"])
        interet_cumule -= float(calculated_ajout) * (interet/100) * (int(quinzaine)/24)
    total_cumule = interet_cumule + ajout_cumule
    calculated_initial = total_cumule
  total_cumule = interet_cumule + ajout_cumule

  calcul_result = {
    "interet_cumule": interet_cumule,
    "ajout_cumule": ajout_cumule,
    "total_cumule": total_cumule
  }
  return calcul_result

entree = {
  "1": {
    "24": {'depot': '55'},
    "23": {'depot': '25'},
    "22": {'depot': '25'},
    "21": {'depot': '25'},
    "20": {'depot': '25'},
    "19": {'depot': '25'},
    "18": {'depot': '25'},
    "17": {'depot': '25'},
    "16": {'depot': '25'},
    "15": {'depot': '25'},
    "14": {'depot': '25'},
    "13": {'depot': '25'},
    "12": {'depot': '25'},
    "11": {'depot': '25'},
    "10": {'depot': '25'},
    "9": {'depot': '25'},
    "8": {'depot': '25'},
    "7": {'depot': '25'},
    "6": {'depot': '25'},
    "5": {'depot': '25'},
    "5": {'depot': '25'},
    "4": {'depot': '25'},
    "3": {'depot': '25'},
    "2": {'depot': '25'},
    "1": {'depot': '25'}
  },
  "2": {
    "24": {'depot': '55'},
    "23": {'depot': '25'},
    "22": {'depot': '25'},
    "21": {'depot': '25'},
    "20": {'depot': '25'},
    "19": {'depot': '25'},
    "18": {'depot': '25'},
    "17": {'depot': '25'},
    "16": {'depot': '25'},
    "15": {'depot': '25'},
    "14": {'depot': '25'},
    "13": {'depot': '25'},
    "12": {'depot': '25'},
    "11": {'depot': '25'},
    "10": {'depot': '25'},
    "9": {'depot': '25'},
    "8": {'depot': '25'},
    "7": {'depot': '25'},
    "6": {'depot': '25'},
    "5": {'depot': '25'},
    "5": {'depot': '25'},
    "4": {'depot': '25'},
    "3": {'depot': '25'},
    "2": {'depot': '25'},
    "1": {'depot': '25'},
  }
}
print(ajout_complexe(entree, 6))
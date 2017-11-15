import json
import csv

newdata = {}
newdata["crimes"] = []

file1reader = csv.reader(open("crimes.csv"), delimiter=",")
header1 = file1reader.next()
descriptions = []
#print header1
counter = 1
for row in file1reader:
  newdata["crimes"].append({
    "Case Number" : row[1],
    "Date" : row[2],
    "Description" : row[6].title(),
    "Community Area" : row[13],
    "Latitude" : row[19],
    "Longitude" : row[20],
    "geometry" : {
      "type" : "Point",
      "coordinates": [row[19], row[20]]
    }
  })
  counter+=1
  describe = row[6].title()
  if not(describe in descriptions):
    descriptions.append(describe)


#print descriptions 
with open("adjustedCrimes.json", 'w') as outfile:
    json.dump(newdata, outfile)


#print newdata["crimes"][1:10]
#with open("crimedata.json") as data_file:
#    data = json.load(data_file)

#print data[0]

#newdata = {}
#useful_data = []
#for crimes in data["data"][:20]:
#    crime = []
#    crime.append(crimes[10])
#    crime.append(crimes[15])
#    longAndLat = []
#    longAndLat.append(crimes[27])
#    longAndLat.append(crimes[28])
#    crime.append(longAndLat)
#    useful_data.append(crime)


#for counter, crimes in enumerate(data):
#    crime["Crime 1" + counter].append{
#        ""
#    }
##print data[0]


#########   Lat & long,

#ideas, use the time to map change over time

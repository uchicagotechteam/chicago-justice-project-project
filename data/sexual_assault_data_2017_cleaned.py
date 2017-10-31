# Cleaning sexual_assault_data_2017
#
# Date: October 31, 2017


import json


with open('sexual_assault_data_2017.json', 'w') as json_file:
    json_data = json.load(json_file)
    # Get only the stats (list of lists)
    data = json_data["data"]
    l = []
    # Iterate through each list
    for i in data:
        d = {}

    	[ID, CASE_NUMBER, DATE, BLOCK, IUCR, PRIMARY_IUCR, ARREST, DOMESTIC,\
    	DISTRICT, WARD, COMMUNITY_AREA, FBI_CODE, X_COORDINATE, Y_COORDINATE, YEAR, LATITUDE,\
    	LONGITUDE, LOCATION]\
    	 = [8, 9, 10, 11, 12, 13, 16, 17, 19, 22, 23, 24, 25, 27, 28, 29]
    	d[ID] = i[ID]
    	d[CASE_NUMBER] = i[CASE_NUMBER]
    	d[DATE] = i[DATE]
        d[BLOCK] = i[BLOCK]
        d[IUCR] = i[IUCR]
        d[PRIMARY_IUCR] = i[PRIMARY_IUCR]
        d[ARREST] = i[ARREST]
        d[DOMESTIC] = i[DOMESTIC]
        d[DISTRICT] = i[DISTRICT]
        d[WARD] = i[WARD]
        d[COMMUNITY_AREA] = i[COMMUNITY_AREA]
        d[FBI_CODE] = i[FBI_CODE]
        d[X_COORDINATE] = i[X_COORDINATE]
        d[Y_COORDINATE] = i[Y_COORDINATE]
        d[YEAR] = i[YEAR]
        d[LATITUDE] = i[LATITUDE]
        d[LONGITUDE] = i[LONGITUDE]
        d[LOCATION] = i[LOCATION]
        l.append(d)

    return l



    

    

 

def return_new_address(ward_add, old_address):
	old_address = old_address
	ten_to_15_address_map = {
								'a': 10,
								'b': 11,
								'c': 12,
								'd': 13,
								'e': 14,
								'f': 15,
	}
	if not str(old_address).isdigit():
		old_address = ten_to_15_address_map[old_address.lower()]
	 
	
	address_map = {
		"sanne1":[((1,2,3),(4,5,6,7,8,9)), (1,2)],
		"sanne2":[((1),(2,3)), (1, 2)],
		"pakhribas1":[((1,4,5,6,7,8),(2,3,9)), (3,4)],
		"pakhribas2":[((1,), (2,3), (5,6), (4,), (7,8,9),(10, 11, 12), (13,), (14, 15)), (1, 2, 3, 4, 5, 6, 7, 8)],
		"ghorikharka":[((1,2,3,4,5,6,7,8,9)), (5)],
		"falate":[((1,2,3,4,5,6,7,8,9)), (6)],
		"mugha":[((1,7,8,13),(2,3,4,5,6,9)), (7,8)],
		"chugmang":[((1,2,6),(3,4,5,7,8,9)), (9,10)],
	}
	old_addresses = address_map[ward_add][0]
	new_addresses = address_map[ward_add][1]
	for i, old_add in enumerate(old_addresses):
		if old_address in (old_add):
			return(new_addresses[i])

	default_address = [len(old_add) for old_add in old_addresses]
	index = default_address.index(max(default_address))
	return new_addresses[index]	



if __name__ == "__main__":
	 
 
	#file_name = 'addressedit.txt'
	#file_name = "/home/synced/Documents/address editing/pakhribash 3/parkhribash_3_2.txt"

	#file_name = "/home/synced/Documents/address editing/chumang_shekhar_vae 1st.txt"
	#file_name = '/home/synced/Documents/address editing/2_70_data.txt'
	#file_name = '/home/synced/Documents/address editing/2_63_marriage.txt'
	file_name = '/home/synced/Documents/address editing/chumang_marriage.txt'
	address_map = {
		"sanne1":[((),()), ()],
		"sanne2":[(()), ()],
		"pakhribas1":[((1,4,5,6,7,8),(2,3,9)), (3,4)],
		"pakhribas2":[((1), (2,3), (5,6), (4), (7,8,9),(10, 11, 12), (13), (14, 15)), (1, 2, 3, 4, 5, 6, 7, 8)],
		"ghorikharka":[((1,2,3,4,5,6,7,8,9)), (5)],
		"falate":[((1,2,3,4,5,6,7,8,9)), (6)],
		"mugha":[((1,7,8,13),(2,3,4,5,6,9)), (7,8)],
		"chugmang":[((1,2,6),(3,4,5,7,8,9)), (9,10)],
	}
	#ward no user input
	wards = list(address_map.keys())
	ward = 0 	 
	for i, warda in enumerate(wards):
		print("(", i+1, ")"," ", warda)

	while True:
		choice = int(input("Enter no of respective ward you want to edit:"))
		if choice <= len(wards):
			ward = wards[choice-1]
			print(ward)
			break
	input()
		 

	data = []

	with open(file_name, 'r') as file:
		for line in file.readlines():
			if len(line) > 1:
				datum = line.rstrip().split('–')
				if len(datum[0])>0:
					#print(type(datum))
					#input()
					data.append(datum)
				#print(len(line))
				#input()
	
	for datum in data:
		print(datum)
	input()

	year_book_no = [key for key in data if len(key) == 1]
	concat_year_book = []
	for book_year in year_book_no:
		concat_year_book += book_year

	#print(concat_year_book)

	key_books = [book for book in concat_year_book if len(book)>=15 and book.count('-')>3]
	 
	index_of_books = [data.index([book]) for book in key_books]

	index_of_books.append(len(data))

	data_of_res_books = [data[index_of_books[i]+1:index_of_books[i+1]] for i in range(len(index_of_books)-1)]
	
	 
	dict_data = {}

	if len(key_books) == len(data_of_res_books):
		for i, key in enumerate(key_books):
			temp = {}
			temp_data = data_of_res_books[i]
			key_year_appended = []
			key_years = [year for year in temp_data if len(year) == 1]

	 
			for year in key_years:
				key_year_appended += year
			
			
			index_of_keys_year = [temp_data.index([year]) for year in key_year_appended]			 
			index_of_keys_year.append(len(data))
			data_of_res_year = [temp_data[index_of_keys_year[i]+1:index_of_keys_year[i+1]] for i in range(len(index_of_keys_year)-1)]
			for j, key2 in enumerate(key_year_appended):
				temp[key2] = data_of_res_year[j]			
			dict_data[key] = temp 


	#view data
	print("original dict data:")
	input()

	for key1 in dict_data.keys():
		print(key1)
		for key2 in dict_data[key1].keys():
			print(key2, "\n",dict_data[key1][key2])
		print("\n")
	
	input()	

	 
	for key1 in dict_data.keys():
		for key2 in dict_data[key1].keys():
			
			edited_address = []

			data = dict_data[key1][key2]
			for datum in data:		 
				if len(datum) > 1:
					increment = 1
					#print(datum[0])
					r1, r2 = datum[0].split('-')
					#condition to check for only one data
					if len(r2) == 0:
						r2 = r1
					r1 = int(r1)
					r2 = int(r2)

					if r1 > r2:
						increment = -1
					#concatenate 9 if the any date entry misses
					
					temp = ''
					for value in datum[1]:
						if value != " ":
							temp += value
					datum[1] = temp


					if len(datum[1]) < (abs(r2-r1)+1):
						while(len(datum[1]) <= (abs(r2-r1)+1)):
							datum[1] += '9'

					#for i in range(r2-r1+1):
					for i in range(r1, r2+increment, increment):
						old_add = datum[1][(abs(r1-i))]
						if old_add != " ":
							if old_add.isdigit():
								old_add = int(old_add)
							new_add = return_new_address(ward, old_add)
							edited_address.append([i, new_add])
						
			dict_data[key1][key2] = edited_address


		#print(key,":",dict_data[key])

#view edited data
	for key1 in dict_data.keys():
		print(key1, ":\n", dict_data[key1])
		print("\n")
		input()
	
	print("final data")
	print(dict_data)
	input()
	print(dict_data.keys())
	input()
	 

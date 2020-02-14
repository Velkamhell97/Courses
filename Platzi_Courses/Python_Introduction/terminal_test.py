import timeit
import csv

table = """***************************** CONTACT LIST *****************************
*                                                                      *
*                                                                      *
************************************************************************"""

print(table)
list_table = list(table)
print(list_table)
list_table[75:79] = ['h'] * 3
print(list_table)
table = "".join(list_table)
print(table)

testcode1 = """
x = None
"""
testcode2 = """
x = 0
"""
testcode3 = """
x = ""
"""


class Heroe:
    def __init__(self, nombre_):
        self._nombre = nombre_

    def get_name(self):
        return self._nombre


def test():
    try:
        print(int("3ddd"))
    except ValueError:
        print("Holamundo")
        print("Hola a todos")

    print("Terminated")


test()

heroe1 = Heroe("Daniel")
heroe2 = Heroe("David")
heroe3 = Heroe("Camilo")

heroes = [heroe1, heroe2, heroe3]

x = [heroe for heroe in heroes if heroe.get_name() == "Daniel"][0]
print(x)
y = [idx for idx, heroe in enumerate(heroes) if heroe.get_name() == "David"]
print(y)

print(timeit.timeit(testcode1))
print(timeit.timeit(testcode2))
print(timeit.timeit(testcode3))

with open("csv_test.txt") as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    line_count = 0
    for row in csv_reader:
        print(row)
        if line_count == 0:
            print(f'Columns names are {", ".join(row)}')
            line_count += 1
        else:
            print(f'\t{row[0]} works in the {row[1]} department, and was born in {row[2]}.')
            line_count += 1
        print(f'Processed {line_count} lines.')
        
# optional parameters of cvs_reader:
# delimiter specifies the character used to separate each field. The default is the comma (',').
# quotechar specifies the character used to surround fields that contain the delimiter character. The default is a double quote (' " ').
# escapechar specifies the character used to escape the delimiter character, in case quotes aren’t used. The default is no escape character.

with open('csv_test.txt', mode='r') as csv_file:
    csv_reader = csv.DictReader(csv_file)
    line_count = 0
    print(csv_reader)
    for row in csv_reader:
        print(row)
        if line_count == 0:
            print(f'Column names are {", ".join(row)}') # cuando se hace join a un diccionario es como si las llaves fueran los valores de un arreglo
            line_count += 1
        print(f'\t{row["name"]} works in the {row["department"]} department, and was born in {row["birthday month"]}.')
        line_count += 1
    print(f'Processed {line_count} lines.')


with open('csv_test3.txt', mode='w', newline='') as employee_file:
    employee_writer = csv.writer(employee_file, delimiter='\n', quotechar='"', quoting=csv.QUOTE_MINIMAL)

    employee_writer.writerow(['John Smith', 'Accounting', 'November'])
    employee_writer.writerow(['Erica Meyers', 'IT', 'March'])

with open('users_dirs.txt', mode='a', newline='') as file:
    file_reader = csv.reader(file)

    file_writer = csv.writer(file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
    file_writer.writerow(['Camilo'])
    file_writer.writerow(['David'])


with open('csv_test2.txt', mode='w') as csv_file:
    fieldnames = ['emp_name', 'dept', 'birth_month']
    writer = csv.DictWriter(csv_file, fieldnames=fieldnames)

    writer.writeheader()
    writer.writerow({'emp_name': 'John Smith', 'dept': 'Accounting', 'birth_month': 'November'})
    writer.writerow({'emp_name': 'Erica Meyers', 'dept': 'IT', 'birth_month': 'March'})

print("Terminado")


with open('prueba1.txt', mode='a') as csv_file:
    fieldnames = ['emp_name', 'dept', 'birth_month']
    writer = csv.DictWriter(csv_file, fieldnames=fieldnames)

    writer.writeheader()
    writer.writerow({'emp_name': 'John Smith', 'dept': 'Accounting', 'birth_month': 'November'})
    writer.writerow({'emp_name': 'Erica Meyers', 'dept': 'IT', 'birth_month': 'March'})

print("I cant create witout stop")
print("That is right")


def print_test(args):
    for i in args:
        print(i)


print_test(["daniel","camilo"])

l1 = ["p","d","g","t","i","d"]
l1[1:len(l1)] = list("hola")+list("234")
print(l1[0:len(l1)])
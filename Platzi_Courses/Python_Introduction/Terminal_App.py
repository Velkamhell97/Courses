import re
import time
import csv


class Contact:
    def __init__(self, contact_name, contact_email, contact_phone):
        self._contact_name = contact_name
        self._contact_email = contact_email
        self._contact_phone = contact_phone

    def get_name(self):
        return self._contact_name

    def get_email(self):
        return self._contact_email

    def get_phone(self):
        return self._contact_phone

    def __str__(self):
        return f"Contact(name={self._contact_name}, email={self._contact_email}, phone={self._contact_phone})"

    def __eq__(self, other):
        return self._contact_name == other.get_name() and self._contact_email == other.get_email() and self._contact_phone == other.get_phone()


class Directory:

    _table = """******************************************** CONTACT LIST ********************************************
*                                                                                                    *
******************************************************************************************************"""
    _email_text = ["Enter contact Email: ", "Enter the new contact Email: "]
    _phone_text = ["Enter contact Phone: ", "Enter the new contact Phone: "]
    _buffer_dirs = []
    _current_dir = None

    def __init__(self):
        self._contact_list = []

    def _update_table(self, contacts, action="add"):
        table_list = list(self._table)
        for contact in contacts:
            index = self._contact_list.index(contact)
            counter = 103*(1+index)
            contact_letters = len(str(contact))
            if action == "add":
                table_list[counter:len(table_list)] = list(f"*{' '*100}*\n") + list(f"*{' '*100}*\n") + list("*"*102)
                table_list[counter+2:counter+2+contact_letters] = list(str(contact))
            elif action == "update":
                table_list[counter+2:counter+97] = [" "]*95
                table_list[counter+2:counter+2+contact_letters] = list(str(contact))
            else:
                table_list[counter:counter + 103] = [""]*103
        self._table = "".join(table_list)

    def _mark_table(self, contact):
        print(" ")
        table_list_copy = list(self._table)
        index = self._contact_list.index(contact)+1
        contact_letters = len(str(contact))
        counter = 2+(103*index)+contact_letters+2
        table_list_copy[counter:counter+4] = ['<', '-', '-', '-']
        return print("".join(table_list_copy))

    def _set_dir(self, dir):
        with open(f"{dir}.txt") as selected_dir:
            selected_csv = csv.reader(selected_dir)
            for contact in selected_csv:
                buffer_contact = Contact(contact[0], contact[1], contact[2])
                self._contact_list.append(buffer_contact)
        self._current_dir = dir
        self._update_table(self._contact_list, "add")
        print("Contacts upload successful!")
        print(f"The actual dir is: {dir}")
        time.sleep(2)

    def _actions_screen(self):
        while True:
            try:
                action_option = int(input("""***** Welcome to you Directory, what do you want to do? *****
|                                                           |
| 1. Add Contact                                            |
| 2. Update Contact                                         |    
| 3. Search Contact                                         |
| 4. Delete Contact                                         |
| 5. List Contact                                           |
| 6. Change Directory                                       |
| 7. Exit                                                   |
*************************************************************
option (number): """))
                if action_option > 7 or action_option < 1:
                    print("\nPlease enter a valid input :)\n")
                    time.sleep(2)
                else:
                    break
            except ValueError:
                print("\nPlease enter a valid input :)\n")
                time.sleep(2)

        if action_option == 1:
            self.add_contact()
        elif action_option == 2:
            self.update_contact()
        elif action_option == 3:
            self.search_contact()
        elif action_option == 4:
            self.delete_contact()
        elif action_option == 5:
            self.list_contacts()
        elif action_option == 6:
            self._update_table(self._contact_list, "delete")
            self._contact_list.clear()
            return self.home()
        elif action_option == 7:
            return print("\nThanks for play :)")

    def home(self):
        print("")
        with open("users_dirs.txt") as users:
            users_reader = csv.reader(users, delimiter="\n")
            for directory in users_reader:
                self._buffer_dirs.append(directory[0])
        while True:
            try:
                dir_option = int(input("""***** Hi, welcome to the Directory App, do you have an existing directory or do you want to create one? *****
|                                                                                                           | 
| 1. I already have a directory                                                                             |
| 2. I want to create a directory                                                                           |
| 3. Exit                                                                                                   |
*************************************************************************************************************
option (number): """))
                if dir_option != 1 and dir_option != 2 and dir_option != 3:
                    print("Please enter a valid input :)")
                    time.sleep(2)
                else:
                    break
            except ValueError:
                print("Please enter a valid input :)")
        if dir_option == 3:
            return print("Thanks for play :)")
        else:
            if dir_option == 1:
                dir_name = input("Enter the name of your directory: ")
                if dir_name in self._buffer_dirs:
                    self._set_dir(dir_name)
                    return self._actions_screen()
                else:
                    option = input("Directory not found do you want to create? (y/n): ")
                    if option.lower() == "y":
                        with open("users_dirs.txt", "a", newline='') as users:
                            user_writer = csv.writer(users)
                            user_writer.writerow([dir_name])
                        self._current_dir = dir_name
                        print("Directory created !")
                        time.sleep(2)
                        return self._actions_screen()
                    else:
                        return self.home()
            else:
                new_dir_name = input("Enter the name of your new directory: ")
                with open("users_dirs.txt", "a", newline='') as users:
                    user_writer = csv.writer(users)
                    user_writer.writerow([new_dir_name])

                self._current_dir = new_dir_name
                print("Directory created !")
                time.sleep(2)
                return self._actions_screen()

    def validate_email(self, action):
        email = input(self._email_text[action])
        while True:
            if re.match(r"^[\w._*-]+@[\w._*-]+\.[a-zA-Z]+$", email):
                return email
            elif email == "":
                break
            else:
                email = input("Enter a valid E-mail (empty to exit): ")
        return self.home()

    def validate_phone(self, action):
        phone = input(self._phone_text[action])
        while True:
            if re.match(r"^\d{10}$", phone):
                return phone
            elif phone == "":
                break
            else:
                phone = input("Enter a valid phone (empty to exit): ")
        return self.home()

    def add_contact(self):
        name = input("\nEnter contact name: ")
        try:
            exist_contact = [contact for contact in self._contact_list if contact.get_name() == name][0]
            self._mark_table(exist_contact)
            option = input(f"\nThis contact already exist in your directory, do you want to update? (y/n) ")
            if option.lower() == "y":
                return self.update_contact(self._contact_list.index(exist_contact))
            else:
                return self._actions_screen()
        except IndexError:
            email = self.validate_email(0)
            phone = self.validate_phone(0)
            new_contact = Contact(name, email, phone)
            self._contact_list.append(new_contact)
            with open(f"{self._current_dir}.txt", "a", newline='') as user:
                user_writer = csv.writer(user)
                user_writer.writerow([name, email, phone])

            print("\nContact added successfully!\n")
            self._update_table([new_contact], "add")
            time.sleep(2)
            return self._actions_screen()

    def update_contact(self, index_to_update=None):
        if len(self._contact_list) == 0:
            print(f"\n{self._table}")
            option = input("\nThere are no contacts in your directory yet, do you want to add one? (y/n) ")
            if option.lower() == "y":
                return self.add_contact()
            else:
                return self._actions_screen()
        else:
            if index_to_update is None:
                print(f"\n{self._table}")
                old_name = input("\nEnter the name of contact that you want update: ")
                try:
                    index_to_update = [idx for idx, contact in enumerate(self._contact_list) if contact.get_name() == old_name][0]
                except IndexError:
                    option = input("\nContact not found, do you want to add? (y/n) ").lower()
                    if option == "y":
                        return self.add_contact()
                    else:
                        return self._actions_screen()
                #tambien se hubiera podido de la siguiente manera:
                #for idx, val in enumerate(self._contact_list):
                #   if val.get_name() == old_name:
                #        index_to_update = idx
                #else:
                #    print("Contact not found")

            new_name = input("\nEnter the new contact name: ")
            new_email = self.validate_email(1)
            new_phone = self.validate_phone(1)
            new_contact = Contact(new_name, new_email, new_phone)
            self._contact_list[index_to_update] = new_contact
            with open(f"{self._current_dir}.txt", "w", newline='') as user:
                user_writer = csv.writer(user)
                new_list = []
                for contact in self._contact_list:
                    new_list.append([contact.get_name(), contact.get_email(), contact.get_phone()])
                user_writer.writerows(new_list)
            print("\nContact uploaded successfully\n")
            self._update_table([new_contact], "update")
            time.sleep(2)
            return self._actions_screen()

    def search_contact(self):
        if len(self._contact_list) == 0:
            print(f"\n{self._table}")
            option = input("\nThere are no contacts in your directory yet, do you want to add one? (y/n) ")
            if option.lower() == "y":
                return self.add_contact()
            else:
                return self._actions_screen()
        else:
            print(f"\n{self._table}")
            name_to_search = input("\nEnter the name of the contact that you are looking for: ")
            try:
                found_contact = [contact for contact in self._contact_list if contact.get_name() == name_to_search][0]
                print(f"\n{found_contact}")
                time.sleep(2)
                return self._actions_screen()
            except IndexError:
                option = input("\nContact not found, do you want to add? (y/n) ")
                if option.lower() == "y":
                    return self.add_contact()
                else:
                    return self._actions_screen()

    def delete_contact(self):
        if len(self._contact_list) == 0:
            print(f"\n{self._table}")
            option = input("\nThere are no contacts in your directory yet, do you want to add one? (y/n) ")
            if option.lower() == "y":
                return self.add_contact()
            else:
                return self._actions_screen()
        else:
            print(f"\n{self._table}")
            name_to_delete = input("\nEnter the name of the contact that you want delete: ")
            try:
                delete_contact = [contact for contact in self._contact_list if contact.get_name() == name_to_delete][0]
                self._update_table([delete_contact], "delete")
                self._contact_list.remove(delete_contact)
            except IndexError:
                option = input("\nContact not found, do you want to add? (y/n) ")
                if option.lower() == "y":
                    return self.add_contact()
                else:
                    return self._actions_screen()

            with open(f"{self._current_dir}.txt", "w", newline='') as user:
                user_writer = csv.writer(user)
                new_list = []
                for contact in self._contact_list:
                    new_list.append([contact.get_name(), contact.get_email(), contact.get_phone()])
                user_writer.writerows(new_list)
            print("\nContact successfully removed")
            time.sleep(2)
            return self._actions_screen()

    def list_contacts(self):
        if len(self._contact_list) == 0:
            print(f"\n{self._table}")
            option = input("\nThere are no contacts in your directory yet, do you want to add one? (y/n) ")
            if option.lower() == "y":
                return self.add_contact()
            else:
                return self._actions_screen()

        print(f"\n{self._table}")
        time.sleep(2)
        return self._actions_screen()


my_dir = Directory()
my_dir.home()

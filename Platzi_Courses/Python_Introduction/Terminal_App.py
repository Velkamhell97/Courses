import re
import time
import csv
import sys


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
    _table = "******************************************** CONTACT LIST ********************************************\n" \
             "*                                                                                                    *\n" \
             "******************************************************************************************************"
    _buffer_table = "******************************************** CONTACT LIST ********************************************\n" \
                    "*                                                                                                    *\n" \
                    "******************************************************************************************************"
    _newline = "*                                                                                                    *\n"
    _directory_select = "\n***** Hi, welcome to the Directory App, do you have an existing directory or do you want to create one? *****\n" \
                        "|                                                                                                           |\n" \
                        "| 1. I already have a directory                                                                             |\n" \
                        "| 2. I want to create a directory                                                                           |\n" \
                        "| 3. Exit                                                                                                   |\n" \
                        "*************************************************************************************************************"
    _action_select = "\n***** Welcome to you Directory, what do you want to do? *****\n" \
                     "|                                                           |\n" \
                     "| 1. Add Contact                                            |\n" \
                     "| 2. Update Contact                                         |\n" \
                     "| 3. Search Contact                                         |\n" \
                     "| 4. Delete Contact                                         |\n" \
                     "| 5. List Contact                                           |\n" \
                     "| 6. Change Directory                                       |\n" \
                     "| 7. Exit                                                   |\n" \
                     "*************************************************************"
    _email_text = ("Enter contact Email: ", "Enter the new contact Email: ")
    _phone_text = ("Enter contact Phone: ", "Enter the new contact Phone: ")

    def __init__(self):
        self._contact_list = []
        self._contact_names = []
        self._buffer_dirs = []
        self._current_dir = None
        with open("users_dirs.txt") as users:
            users_reader = csv.reader(users, delimiter="\n")
            for directory in users_reader:
                self._buffer_dirs.append(directory[0])

    def _update_table(self, contact, action="add"):
        table_list = list(self._table)
        idx = self._contact_list.index(contact)
        contact_idx = 103 * (1 + idx)
        contact_letters = len(str(contact))
        start_contact = contact_idx + 2
        end_contact = start_contact + contact_letters
        newline_flag = 103 * (2 + idx)
        if action == "add":
            table_list[start_contact:end_contact] = list(str(contact))
            table_list[newline_flag:newline_flag] = list(self._newline)
        elif action == "update":
            table_list[start_contact:newline_flag-2] = [" "] * 99
            table_list[start_contact:end_contact] = list(str(contact))
        else:
            table_list[start_contact-2:newline_flag] = [""] * 103
        self._table = "".join(table_list)

    def _mark_table(self, contact):
        print(" ")
        table_list_copy = list(self._table)
        idx = self._contact_list.index(contact) + 1
        contact_letters = len(str(contact))
        arrow_flag = 4 + 103*idx + contact_letters
        table_list_copy[arrow_flag:arrow_flag+4] = ['<', '-', '-', '-']
        return print("".join(table_list_copy))

    def _upload_dir(self, dir_input):
        self._current_dir = dir_input
        with open(f"{dir_input}.txt") as selected_dir:
            selected_csv = csv.reader(selected_dir)
            for contact in selected_csv:
                buffer_contact = Contact(contact[0], contact[1], contact[2])
                self._contact_list.append(buffer_contact)
                self._contact_names.append(contact[0])
                self._update_table(buffer_contact)
        print("\nContacts upload successful!")
        print(f"\n**** The actual dir is: {dir_input} ****")

    def _create_dir(self, dir_name):
        with open("users_dirs.txt", "a", newline='') as users:
            user_writer = csv.writer(users)
            user_writer.writerow([dir_name])
            with open(f"{dir_name}.txt", "a", newline='') as user:
                pass
        self._current_dir = dir_name
        self._buffer_dirs.append(dir_name)
        print("\nDirectory created !")
        print(f"\n**** The actual dir is: {dir_name} ****")

    def home(self):
        while True:
            print(self._directory_select)
            try:
                dir_option = int(input("option (number): "))
                if dir_option < 1 or dir_option > 3:
                    print("Please enter a valid input :)")
                    time.sleep(2)
                else:
                    break
            except ValueError:
                print("Please enter a valid input :)")
        if dir_option == 3:
            print("Thanks for play :)")
            sys.exit()
        elif dir_option == 1:
            dir_name = input("\nEnter the name of your directory: ")
            if dir_name in self._buffer_dirs:
                self._upload_dir(dir_name)
                time.sleep(2)
                return self._actions_screen()
            else:
                dir_option = input("\nDirectory not found do you want to create? (y/n): ")
                if dir_option.lower() == "y":
                    self._create_dir(dir_name)
                    time.sleep(2)
                    return self._actions_screen()
                else:
                    return self.home()
        else:
            dir_name = input("Enter the name of your new directory: ")
            if dir_name in self._buffer_dirs:
                option_directory = input("\nThis directory already exist, do you want to use (y/n): ")
                if option_directory.lower() == "y":
                    self._upload_dir(dir_name)
                    time.sleep(2)
                    return self._actions_screen()
                else:
                    return self.home()
            self._create_dir(dir_name)
            time.sleep(2)
            return self._actions_screen()

    def _actions_screen(self):
        while True:
            print(self._action_select)
            try:
                action_option = int(input("option (number): "))
                if action_option < 1 or action_option > 7:
                    print("\nPlease enter a valid input :)\n")
                    time.sleep(2)
                else:
                    break
            except ValueError:
                print("\nPlease enter a valid input :)\n")
                time.sleep(2)

        if action_option == 1:
            return self.add_contact()
        elif action_option == 2:
            return self.update_contact()
        elif action_option == 3:
            return self.search_contact()
        elif action_option == 4:
            return self.delete_contact()
        elif action_option == 5:
            return self.list_contacts()
        elif action_option == 6:
            self._table = self._buffer_table
            self._contact_list.clear()
            self._contact_names.clear()
            return self.home()
        elif action_option == 7:
            print("\nThanks for play :)")
            sys.exit()

    def _validate_data(self, action):
        email = input(self._email_text[action])
        compiler = re.compile(r"^[\w._*-]+@[\w._*-]+\.[a-zA-Z]+$")
        while True:
            if compiler.match(email):
                break
            elif email == "":
                return self._actions_screen()
            else:
                email = input("Enter a valid E-mail (empty to exit): ")
        phone = input(self._phone_text[action])
        compiler = re.compile(r"^\d{10}$")
        while True:
            if compiler.match(phone):
                return email, phone
            elif phone == "":
                return self._actions_screen()
            else:
                phone = input("Enter a valid phone (empty to exit): ")

    def _validate_table(self):
        if len(self._contact_list) == 0:
            print(f"\n{self._table}")
            option = input("\nThere are no contacts in your directory yet, do you want to add one? (y/n) ")
            if option.lower() == "y":
                return self.add_contact()
            else:
                return self._actions_screen()

    def _not_found_contact(self):
        option = input("\nContact not found, do you want to add? (y/n) ")
        if option.lower() == "y":
            return self.add_contact()
        else:
            return self._actions_screen()

    def _update_csv(self):
        with open(f"{self._current_dir}.txt", "w", newline='') as user:
            user_writer = csv.writer(user)
            new_list = []
            for contact in self._contact_list:
                new_list.append([contact.get_name(), contact.get_email(), contact.get_phone()])
            user_writer.writerows(new_list)

    def add_contact(self):
        name = input("\nEnter contact name: ")
        if name in self._contact_names:
            index_contact = self._contact_names.index(name)
            self._mark_table(self._contact_list[index_contact])
            option = input(f"\nThis contact already exist in your directory, do you want to update? (y/n) ")
            if option.lower() == "y":
                return self.update_contact(index_contact)
            else:
                return self._actions_screen()
        else:
            email, phone = self._validate_data(0)
            new_contact = Contact(name, email, phone)
            self._contact_list.append(new_contact)
            self._contact_names.append(name)
            self._update_table(new_contact, "add")
            with open(f"{self._current_dir}.txt", "a", newline='') as user:
                user_writer = csv.writer(user)
                user_writer.writerow([name, email, phone])
            print("\nContact added successfully!\n")
            time.sleep(2)
            return self._actions_screen()

    def update_contact(self, update_idx=None):
        self._validate_table()
        if update_idx is None:
            print(f"\n{self._table}")
            old_name = input("\nEnter the name of contact that you want update: ")
            if old_name in self._contact_names:
                update_idx = self._contact_names.index(old_name)
            else:
                self._not_found_contact()
        new_name = input("\nEnter the new contact name: ")
        new_email, new_phone = self._validate_data(1)
        updated_contact = Contact(new_name, new_email, new_phone)
        self._contact_list[update_idx] = updated_contact
        self._contact_names[update_idx] = new_name
        self._update_table(updated_contact, "update")
        self._update_csv()
        print("\nContact uploaded successfully\n")
        time.sleep(2)
        return self._actions_screen()

    def search_contact(self):
        self._validate_table()
        print(f"\n{self._table}")
        name_to_search = input("\nEnter the name of the contact that you are looking for: ")
        if name_to_search in self._contact_names:
            contact_index = self._contact_names.index(name_to_search)
            print(f"\n{self._contact_list[contact_index]}")
            time.sleep(2)
            return self._actions_screen()
        else:
            self._not_found_contact()

    def delete_contact(self):
        self._validate_table()
        print(f"\n{self._table}")
        name_to_delete = input("\nEnter the name of the contact that you want delete: ")
        if name_to_delete in self._contact_names:
            contact_index = self._contact_names.index(name_to_delete)
            self._update_table(self._contact_list[contact_index], "delete")
            self._contact_list.remove(self._contact_list[contact_index])
            self._contact_names.remove(name_to_delete)
            self._update_csv()
            print("\nContact successfully removed")
            time.sleep(2)
            return self._actions_screen()
        else:
            self._not_found_contact()

    def list_contacts(self):
        self._validate_table()
        print(f"\n{self._table}")
        time.sleep(2)
        return self._actions_screen()


my_dir = Directory()
my_dir.home()


# def add_contact(self):
#     name = input("\nEnter contact name: ")
#     try:
#         exist_contact = [contact for contact in self._contact_list if contact.get_name() == name][0]
#         self._mark_table(exist_contact)
#         option = input(f"\nThis contact already exist in your directory, do you want to update? (y/n) ")
#         if option.lower() == "y":
#             return self.update_contact(self._contact_list.index(exist_contact))
#         else:
#             return self._actions_screen()
#     except IndexError:
#         email = self.validate_email(0)
#         phone = self.validate_phone(0)
#         new_contact = Contact(name, email, phone)
#         self._contact_list.append(new_contact)
#         with open(f"{self._current_dir}.txt", "a", newline='') as user:
#             user_writer = csv.writer(user)
#             user_writer.writerow([name, email, phone])
#
#         print("\nContact added successfully!\n")
#         self._update_table(new_contact, "add")
#         time.sleep(2)
#         return self._actions_screen()

# def update_contact(self, index_to_update=None):
#     if len(self._contact_list) == 0:
#         print(f"\n{self._table}")
#         option = input("\nThere are no contacts in your directory yet, do you want to add one? (y/n) ")
#         if option.lower() == "y":
#             return self.add_contact()
#         else:
#             return self._actions_screen()
#     else:
#         if index_to_update is None:
#             print(f"\n{self._table}")
#             old_name = input("\nEnter the name of contact that you want update: ")
#             try:
#                 index_to_update = \
#                 [idx for idx, contact in enumerate(self._contact_list) if contact.get_name() == old_name][0]
#             except IndexError:
#                 option = input("\nContact not found, do you want to add? (y/n) ").lower()
#                 if option == "y":
#                     return self.add_contact()
#                 else:
#                     return self._actions_screen()
#         new_name = input("\nEnter the new contact name: ")
#         new_email = self.validate_email(1)
#         new_phone = self.validate_phone(1)
#         new_contact = Contact(new_name, new_email, new_phone)
#         self._contact_list[index_to_update] = new_contact
#         with open(f"{self._current_dir}.txt", "w", newline='') as user:
#             user_writer = csv.writer(user)
#             new_list = []
#             for contact in self._contact_list:
#                 new_list.append([contact.get_name(), contact.get_email(), contact.get_phone()])
#             user_writer.writerows(new_list)
#         print("\nContact uploaded successfully\n")
#         self._update_table(new_contact, "update")
#         time.sleep(2)
#         return self._actions_screen()

# def search_contact(self):
#     self._validate_table()
#     print(f"\n{self._table}")
#     name_to_search = input("\nEnter the name of the contact that you are looking for: ")
#     try:
#         found_contact = [contact for contact in self._contact_list if contact.get_name() == name_to_search][0]
#         print(f"\n{found_contact}")
#         time.sleep(2)
#         return self._actions_screen()
#     except IndexError:
#         option = input("\nContact not found, do you want to add? (y/n) ")
#         if option.lower() == "y":
#             return self.add_contact()
#         else:
#             return self._actions_screen

# def validate_email(self, action):
#     email = input(self._email_text[action])
#     compiler = re.compile(r"^[\w._*-]+@[\w._*-]+\.[a-zA-Z]+$")
#     while True:
#         if compiler.match(email):
#             return email
#         elif email == "":
#             break
#         else:
#             email = input("Enter a valid E-mail (empty to exit): ")
#     return self._actions_screen()
#
#
# def validate_phone(self, action):
#     phone = input(self._phone_text[action])
#     compiler = re.compile(r"^\d{10}$")
#     while True:
#         if compiler.match(phone):
#             return phone
#         elif phone == "":
#             break
#         else:
#             phone = input("Enter a valid phone (empty to exit): ")
#     return self._actions_screen()

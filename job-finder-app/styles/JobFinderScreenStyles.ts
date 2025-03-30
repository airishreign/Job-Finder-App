import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  searchBar: {
  flex: 1,
  height: 40, 
  padding: 0,
  borderWidth: 0,
},
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 8,
  },
  clearButton: {
    padding: 5,
  },
  jobCard: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 3,
    borderWidth: 1,
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  companyName: {
    fontSize: 14,
  },
  saveButton: {
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  jobDetailsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#4C1D95',
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
  },
  themeButton: {
    alignSelf: 'flex-end',
    padding: 10,
    backgroundColor: '#6C63FF',
    borderRadius: 5,
    marginBottom: 10,
  },
  themeButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
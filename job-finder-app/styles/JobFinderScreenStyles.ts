import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F3FF', // Soft purple background
  },
  searchBar: {
    height: 40,
    borderWidth: 1,
    borderColor: '#C4B5FD', // Light purple border
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 10,
    backgroundColor: '#FFFFFF',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#C4B5FD',
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
  },
  searchIcon: {
    marginRight: 8,
    color: '#6C63FF', // Vibrant purple
  },
  clearButton: {
    padding: 5,
    color: '#7C73FF', // Medium purple
  },
  jobCard: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 3,
    borderColor: '#DDD6FE', // Pale purple border
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
    color: '#4C1D95', // Deep purple
  },
  companyName: {
    fontSize: 14,
    color: '#6B7280', // Purple-gray
  },
  saveButton: {
    marginTop: 10,
    backgroundColor: '#6C63FF', // Primary purple
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(80, 72, 152, 0.4)', // Purple tinted overlay
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
    backgroundColor: '#9333EA', // Secondary purple
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
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F3FF',
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  emptyStateText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    color: '#6B7280',
  },
  jobCard: {
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
    elevation: 3,
    shadowColor: '#4C1D95',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    borderColor: '#DDD6FE',
    borderWidth: 1,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4C1D95',
  },
  companyName: {
    fontSize: 14,
    color: '#6B7280',
  },
  jobDetailText: {
    color: '#7C73FF',
  },
  applyButton: {
    backgroundColor: '#6C63FF',
  },
  removeButton: {
    backgroundColor: '#EF4444', // Complementary red
  },
  modalOverlay: {
    backgroundColor: 'rgba(80, 72, 152, 0.4)',
  },
  modalContainer: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#4C1D95',
  },
  formTitle: {
    color: '#4C1D95',
  },
  selectedJobInfo: {
    borderBottomColor: '#DDD6FE',
  },
  input: {
    borderColor: '#C4B5FD',
    backgroundColor: '#FFFFFF',
  },
  submitButton: {
    backgroundColor: '#6C63FF',
  },
  closeButton: {
    backgroundColor: '#C4B5FD', // Light purple
  },
});

export default styles;
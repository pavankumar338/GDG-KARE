# ML Event Registration Page

I've successfully created a comprehensive ML Event registration page for your GDG KARE project with all the requested fields:

## Features Implemented

### 📋 Registration Form Fields
- **Name**: Full name validation (minimum 2 characters)
- **Registration Number**: 11-digit validation with auto-email generation
- **WhatsApp Number**: 10-digit mobile number validation
- **Year of Study**: Dropdown selection (1st - 4th year)
- **College Email**: Auto-populated based on registration number with KLU format validation

### 🎨 Design Features
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Dark/Light Theme Support**: Automatically adapts to user's theme preference
- **Modern UI**: Uses Google's Material Design colors and styling consistent with GDG branding
- **Animated Elements**: Smooth transitions and hover effects using Framer Motion
- **Retro Grid Background**: Professional animated background pattern

### ✅ Validation & UX
- **Real-time Validation**: Instant feedback as users type
- **Form Validation**: Comprehensive validation for all fields
- **Error Handling**: Clear error messages with visual indicators
- **Success State**: Confirmation page after successful registration
- **Loading States**: User feedback during form submission

### 🚀 Technical Implementation
- **React Functional Components**: Modern React with hooks
- **Styled Components**: Emotion/styled for consistent theming
- **Auto-fill Logic**: Registration number automatically generates email
- **Email Validation**: Ensures college email format (@klu.ac.in)
- **Mobile Number Validation**: Indian mobile number format validation

## How to Access

The page is now available at: **`/ml-event`**

You can navigate to it by:
1. Going directly to `http://localhost:5174/ml-event`
2. Adding a link in your navigation or events page
3. Adding a "Register" button in your events section

## Example Usage in Other Components

To link to the ML Event registration from other pages:

```jsx
import { Link } from 'react-router-dom';

// In your Events component or anywhere else:
<Link to="/ml-event">
  <button>Register for ML Event</button>
</Link>
```

## Form Data Structure

When submitted, the form collects:
```javascript
{
  name: "Student Name",
  regno: "99230304050", 
  whatsapp: "9876543210",
  year: "2nd Year",
  email: "99230304050@klu.ac.in"
}
```

The form is now fully functional and ready for integration with your backend API. You can modify the submission logic in the `handleSubmit` function to send data to your actual registration endpoint.

## Next Steps

1. **Backend Integration**: Connect the form to your registration API
2. **Email Verification**: Add email verification if needed
3. **Event Details**: Update the event information section with actual details
4. **Navigation**: Add links to this page from your main events section

The page follows all your existing design patterns and should integrate seamlessly with your current GDG KARE website!
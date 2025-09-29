import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { RetroGrid } from "./RetroGrid";
import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase, ML_REGISTRATIONS_TABLE } from "../lib/supabase";

const MLEventSection = styled.section`
  padding: 8rem 2rem;
  background: var(--bg-primary);
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  body.dark & {
    background: var(--bg-primary-dark);
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const Title = styled(motion.h2)`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--blue), var(--medium-blue));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled(motion.p)`
  text-align: center;
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: 3rem;
  line-height: 1.6;

  body.dark & {
    color: var(--text-secondary-dark);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const InstructionDiv = styled.div`
  background: var(--bg-primary);
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;

  body.dark & {
    background: var(--bg-secondary-dark);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const Form = styled.form`
  background: var(--bg-primary);
  padding: 2.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);

  body.dark & {
    background: var(--bg-secondary-dark);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.75rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  font-weight: 500;

  body.dark & {
    color: var(--text-primary-dark);
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid var(--grey);
  border-radius: 0.5rem;
  background: var(--bg-input);
  color: var(--text-primary);
  transition: all 0.3s ease;

  body.dark & {
    background: var(--bg-secondary-dark);
    border-color: var(--text-secondary-dark);
    color: var(--text-primary-dark);

    &:focus {
      border-color: var(--medium-blue);
      box-shadow: 0 0 0 2px rgba(66, 133, 244, 0.2);
    }
  }

  &:focus {
    outline: none;
    border-color: var(--medium-blue);
    box-shadow: 0 0 0 2px rgba(66, 133, 244, 0.1);
  }

  &:hover {
    border-color: var(--text-secondary);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid var(--grey);
  border-radius: 0.5rem;
  background: var(--bg-input);
  color: var(--text-primary);
  transition: all 0.3s ease;
  cursor: pointer;

  body.dark & {
    background: var(--bg-secondary-dark);
    border-color: var(--text-secondary-dark);
    color: var(--text-primary-dark);

    &:focus {
      border-color: var(--medium-blue);
      box-shadow: 0 0 0 2px rgba(66, 133, 244, 0.2);
    }
  }

  &:focus {
    outline: none;
    border-color: var(--medium-blue);
    box-shadow: 0 0 0 2px rgba(66, 133, 244, 0.1);
  }

  &:hover {
    border-color: var(--text-secondary);
  }
`;

const RequiredIndicator = styled.span`
  color: var(--medium-red);
  margin-left: 4px;
`;

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(135deg, var(--blue), var(--medium-blue));
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    opacity: 0.9;
    transform: translateY(-2px);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }

  &:not(:disabled):active {
    transform: translateY(0);
  }

  body.dark & {
    &:disabled {
      background: var(--bg-secondary-dark);
    }
  }
`;

const ErrorMessage = styled.div`
  color: var(--medium-red);
  font-size: 0.875rem;
  margin-top: 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: "!";
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    background: var(--medium-red);
    color: white;
    border-radius: 50%;
    font-size: 0.75rem;
    font-weight: bold;
  }
`;

const SuccessMessage = styled.div`
  text-align: center;
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border-radius: 1rem;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border: 1px solid rgba(255, 255, 255, 0.18);

  body.dark & {
    background: rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  h3 {
    color: var(--medium-green);
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    color: var(--text-secondary);
    margin-bottom: 1.5rem;

    body.dark & {
      color: var(--text-secondary-dark);
    }
  }
`;

const BackButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--blue);
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    color: var(--medium-blue);
    transform: translateX(-2px);
  }

  body.dark & {
    color: var(--light-blue);

    &:hover {
      color: var(--blue);
    }
  }
`;

const WhatsAppButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin: 1.5rem 0;
  padding: 1rem 2rem;
  background: #25d366;
  color: white;
  border: none;
  border-radius: 0.75rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);

  &:hover {
    background: #128c7e;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

const EventInfo = styled.div`
  background: linear-gradient(135deg, var(--blue-alpha), var(--blue-alpha-hover));
  padding: 1.5rem;
  border-radius: 0.75rem;
  margin-bottom: 1rem;
  border-left: 4px solid var(--blue);

  body.dark & {
    background: linear-gradient(135deg, var(--blue-alpha-dark), var(--blue-alpha-dark-hover));
    border-left-color: var(--light-blue);
  }

  h4 {
    color: var(--blue);
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    font-weight: 600;

    body.dark & {
      color: var(--light-blue);
    }
  }

  p {
    color: var(--text-secondary);
    margin: 0;
    line-height: 1.5;

    body.dark & {
      color: var(--text-secondary-dark);
    }
  }
`;

const StepIndicator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const Step = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-weight: 500;
  background: ${props => props.active ? 'var(--blue)' : 'var(--light-grey)'};
  color: ${props => props.active ? 'white' : 'var(--text-secondary)'};
  transition: all 0.3s ease;

  body.dark & {
    background: ${props => props.active ? 'var(--medium-blue)' : 'var(--bg-secondary-dark)'};
    color: ${props => props.active ? 'white' : 'var(--text-secondary-dark)'};
  }
`;

const StepNumber = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${props => props.active ? 'rgba(255,255,255,0.2)' : 'var(--grey)'};
  font-size: 0.875rem;
  font-weight: 600;

  body.dark & {
    background: ${props => props.active ? 'rgba(255,255,255,0.3)' : 'var(--text-secondary-dark)'};
  }
`;

const FileUploadArea = styled.div`
  border: 2px dashed var(--grey);
  border-radius: 0.5rem;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    border-color: var(--blue);
    background: var(--blue-alpha);
  }

  &.dragover {
    border-color: var(--blue);
    background: var(--blue-alpha);
  }

  body.dark & {
    border-color: var(--text-secondary-dark);
    
    &:hover {
      border-color: var(--light-blue);
      background: var(--blue-alpha-dark);
    }
  }
`;

const FileInput = styled.input`
  display: none;
`;

const ImagePreview = styled.div`
  margin-top: 1rem;
  text-align: center;
  
  img {
    max-width: 100%;
    max-height: 200px;
    border-radius: 0.5rem;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
`;

const QRScannerContainer = styled.div`
  background: linear-gradient(135deg, var(--blue-alpha), var(--blue-alpha-hover));
  padding: 2rem;
  border-radius: 1rem;
  margin-bottom: 2rem;
  text-align: center;
  border-left: 4px solid var(--blue);

  body.dark & {
    background: linear-gradient(135deg, var(--blue-alpha-dark), var(--blue-alpha-dark-hover));
    border-left-color: var(--light-blue);
  }

  h4 {
    color: var(--blue);
    font-size: 1.3rem;
    margin-bottom: 1rem;
    font-weight: 600;

    body.dark & {
      color: var(--light-blue);
    }
  }
`;

const QRCodeDisplay = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  margin: 1.5rem auto;
  max-width: 300px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const PaymentDetails = styled.div`
  background: var(--bg-primary);
  padding: 1.5rem;
  border-radius: 0.75rem;
  margin: 1rem 0;
  border: 2px solid var(--blue);

  body.dark & {
    background: var(--bg-secondary-dark);
    border-color: var(--light-blue);
  }

  h5 {
    color: var(--blue);
    margin-bottom: 0.75rem;
    font-size: 1.1rem;
    font-weight: 600;

    body.dark & {
      color: var(--light-blue);
    }
  }

  p {
    color: var(--text-secondary);
    margin: 0.25rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    body.dark & {
      color: var(--text-secondary-dark);
    }

    strong {
      color: var(--text-primary);

      body.dark & {
        color: var(--text-primary-dark);
      }
    }
  }
`;

const ScanInstructions = styled.div`
  background: var(--light-yellow);
  padding: 1rem;
  border-radius: 0.5rem;
  margin-top: 1rem;
  border-left: 4px solid var(--yellow);

  body.dark & {
    background: rgba(251, 188, 4, 0.1);
  }

  p {
    margin: 0.25rem 0;
    color: var(--text-primary);
    font-size: 0.9rem;

    body.dark & {
      color: var(--text-primary-dark);
    }
  }

  strong {
    color: var(--orange);
  }
`;

const PaymentInfo = styled.div`
  background: linear-gradient(135deg, var(--green), var(--medium-green));
  color: white;
  padding: 1.5rem;
  border-radius: 0.75rem;
  margin-bottom: 1.5rem;
  
  h4 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
  }
  
  p {
    margin: 0.5rem 0;
    
    strong {
      display: inline-block;
      min-width: 120px;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const BackButton2 = styled(motion.button)`
  flex: 1;
  padding: 1rem;
  background: var(--grey);
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: var(--text-secondary);
    transform: translateY(-1px);
  }
`;

// Helper function to upload screenshot to Supabase Storage
const uploadScreenshot = async (file, registrationId) => {
  try {
    const fileExt = file.name.split('.').pop();
    const fileName = `${registrationId}_screenshot.${fileExt}`;
    const filePath = `screenshots/${fileName}`;

    const { data, error } = await supabase.storage
      .from('ml-event-files')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false
      });

    if (error) {
      console.error('Screenshot upload error:', error);
      throw error;
    }

    // Get public URL for the uploaded file
    const { data: { publicUrl } } = supabase.storage
      .from('ml-event-files')
      .getPublicUrl(filePath);

    return publicUrl;
  } catch (error) {
    console.error('Error uploading screenshot:', error);
    throw error;
  }
};

// Helper function to save registration data to Supabase
const saveRegistrationData = async (formData, paymentData, screenshotUrl) => {
  try {
    // Convert year string to integer
    const yearNumber = parseInt(formData.year.charAt(0)); // Extract first digit from "1st Year", "2nd Year", etc.
    
    const registrationData = {
      name: formData.name,
      registration_number: formData.regno,
      whatsapp_number: formData.whatsapp,
      year: yearNumber,
      department: formData.department,
      college_email: formData.email,
      transaction_id: paymentData.transactionId,
      screenshot_url: screenshotUrl,
      registration_date: new Date().toISOString(),
       // Can be 'pending', 'approved', 'rejected'
    };

    const { data, error } = await supabase
      .from(ML_REGISTRATIONS_TABLE)
      .insert([registrationData])
      .select()
      .single();

    if (error) {
      console.error('Database insert error:', error);
      // If table doesn't exist, provide helpful error message
      if (error.message?.includes('relation') && error.message?.includes('does not exist')) {
        throw new Error('Database table not set up. Please create the ml-registrations table in Supabase.');
      }
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error saving registration data:', error);
    throw error;
  }
};

const MLEvent = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    regno: "",
    whatsapp: "",
    year: "",
    department: "",
    email: ""
  });
  
  const [paymentData, setPaymentData] = useState({
    transactionId: "",
    screenshot: null,
    screenshotPreview: null
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validateRegistrationForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    // Registration number validation
    if (!formData.regno.trim()) {
      newErrors.regno = "Registration number is required";
    } else if (!/^[0-9]{11}$/.test(formData.regno.trim())) {
      newErrors.regno = "Registration number must be 11 digits";
    }

    // WhatsApp validation
    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = "WhatsApp number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.whatsapp.trim())) {
      newErrors.whatsapp = "Enter a valid 10-digit mobile number";
    }

    // Year validation
    if (!formData.year) {
      newErrors.year = "Year is required";
    }

    // Department validation
    if (!formData.department) {
      newErrors.department = "Department is required";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "College email is required";
    } else if (!/^[0-9]{11}@klu\.ac\.in$/.test(formData.email.trim())) {
      newErrors.email = "Please use your college email (e.g., 99230304050@klu.ac.in)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validatePaymentForm = () => {
    const newErrors = {};

    // Transaction ID validation
    if (!paymentData.transactionId.trim()) {
      newErrors.transactionId = "Transaction ID is required";
    } else if (paymentData.transactionId.trim().length < 8) {
      newErrors.transactionId = "Transaction ID must be at least 8 characters";
    }

    // Screenshot validation
    if (!paymentData.screenshot) {
      newErrors.screenshot = "Payment screenshot is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear specific error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }

    // Auto-fill email based on registration number
    if (name === "regno" && value.length === 11) {
      setFormData(prev => ({
        ...prev,
        email: `${value}@klu.ac.in`
      }));
    }
  };

  const handlePaymentChange = (e) => {
    const { name, value } = e.target;
    
    setPaymentData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear specific error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    
    if (file) {
      // Validate file type
      const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
      if (!validTypes.includes(file.type)) {
        setErrors(prev => ({
          ...prev,
          screenshot: "Please upload a valid image file (JPG, PNG, WEBP)"
        }));
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrors(prev => ({
          ...prev,
          screenshot: "File size must be less than 5MB"
        }));
        return;
      }

      // Create preview URL
      const previewUrl = URL.createObjectURL(file);
      
      setPaymentData(prev => ({
        ...prev,
        screenshot: file,
        screenshotPreview: previewUrl
      }));

      // Clear error if file is valid
      if (errors.screenshot) {
        setErrors(prev => ({
          ...prev,
          screenshot: ""
        }));
      }
    }
  };

  const proceedToPayment = (e) => {
    e.preventDefault();
    
    if (!validateRegistrationForm()) {
      return;
    }
    
    setCurrentStep(2);
  };

  const goBackToRegistration = () => {
    setCurrentStep(1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validatePaymentForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      // Generate a unique registration ID for file naming
      const registrationId = `${formData.regno}_${Date.now()}`;
      
      // Step 1: Upload screenshot to Supabase Storage
      const screenshotUrl = await uploadScreenshot(paymentData.screenshot, registrationId);
      
      // Step 2: Save registration data to Supabase database
      const savedData = await saveRegistrationData(formData, paymentData, screenshotUrl);
      
      console.log("Registration saved successfully:", savedData);
      setSubmitSuccess(true);
      
    } catch (error) {
      console.error("Registration error:", error);
      
      // Provide specific error messages based on the error type
      if (error.message?.includes('storage')) {
        setSubmitError("Failed to upload screenshot. Please check your file and try again.");
      } else if (error.message?.includes('duplicate')) {
        setSubmitError("Registration with this email or registration number already exists.");
      } else if (error.code === 'PGRST116') {
        setSubmitError("Database connection error. Please try again later.");
      } else {
        setSubmitError("Failed to submit registration. Please check your connection and try again.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <MLEventSection>
        <RetroGrid />
        <Container>
          <SuccessMessage
            as={motion.div}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h3>🎉 Registration Successful!</h3>
              <p>
                Thank you for registering for the ML Event! We've received your
                registration and payment details. You'll receive a confirmation email shortly.
              </p>
              <p>
                For any further queries, contact us at <strong  class="text-indigo-600">gdsckare@klu.ac.in</strong>
              </p>
              
              <p style={{ marginBottom: '0.5rem' }}>
                Don't forget to join our WhatsApp group for updates and networking!
              </p>
              
              <WhatsAppButton 
                href="https://chat.whatsapp.com/EhaEKb9Hi2nLjtiyCGTQSM" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.191z"/>
                </svg>
                Join WhatsApp Group
              </WhatsAppButton>

            
              <BackButton to="/events">
                ← Back to Events
              </BackButton>
            </motion.div>
          </SuccessMessage>
        </Container>
      </MLEventSection>
    );
  }

  return (
    <MLEventSection>
      <RetroGrid />
      <Container>
        <Title
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          ML Event Registration
        </Title>
        
        <Subtitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Join us for an exciting Machine Learning event! Complete registration and payment to secure your spot.
        </Subtitle>

        <StepIndicator>
          <Step active={currentStep === 1}>
            <StepNumber active={currentStep === 1}>1</StepNumber>
            Registration Details
          </Step>
          <Step active={currentStep === 2}>
            <StepNumber active={currentStep === 2}>2</StepNumber>
            Payment
          </Step>
        </StepIndicator>

        {currentStep === 1 ? (
          <>
           

            <Form 
              onSubmit={proceedToPayment}
              as={motion.form}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
            <FormGroup>
              <Label>
                Full Name <RequiredIndicator>*</RequiredIndicator>
              </Label>
              <Input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                style={{
                  borderColor: errors.name ? "var(--medium-red)" : undefined,
                }}
              />
              {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <Label>
                Registration Number <RequiredIndicator>*</RequiredIndicator>
              </Label>
              <Input
                name="regno"
                type="text"
                value={formData.regno}
                onChange={handleChange}
                placeholder="e.g., 99230040000"
                maxLength={11}
                style={{
                  borderColor: errors.regno ? "var(--medium-red)" : undefined,
                }}
              />
              {errors.regno && <ErrorMessage>{errors.regno}</ErrorMessage>}
            </FormGroup>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormGroup>
                <Label>
                  WhatsApp Number <RequiredIndicator>*</RequiredIndicator>
                </Label>
                <Input
                  name="whatsapp"
                  type="tel"
                  value={formData.whatsapp}
                  onChange={handleChange}
                  placeholder="9876543210"
                  maxLength={10}
                  style={{
                    borderColor: errors.whatsapp ? "var(--medium-red)" : undefined,
                  }}
                />
                {errors.whatsapp && <ErrorMessage>{errors.whatsapp}</ErrorMessage>}
              </FormGroup>

              <FormGroup>
                <Label>
                  Year of Study <RequiredIndicator>*</RequiredIndicator>
                </Label>
                <Select
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  style={{
                    borderColor: errors.year ? "var(--medium-red)" : undefined,
                  }}
                >
                  <option value="">Select Year</option>
                  <option value="1st Year">1st Year</option>
                  <option value="2nd Year">2nd Year</option>
                  <option value="3rd Year">3rd Year</option>
                  <option value="4th Year">4th Year</option>
                </Select>
                {errors.year && <ErrorMessage>{errors.year}</ErrorMessage>}
              </FormGroup>
            </div>

            <FormGroup>
              <Label>
                Department <RequiredIndicator>*</RequiredIndicator>
              </Label>
              <Select
                name="department"
                value={formData.department}
                onChange={handleChange}
                style={{
                  borderColor: errors.department ? "var(--medium-red)" : undefined,
                }}
              >
                <option value="">Select Department</option>
                <option value="Computer Science and Engineering">Computer Science and Engineering (CSE)</option>
                <option value="Computer Science and Information Technology">Computer Science and Information Technology (CSIT)</option>
                <option value="Computer Science and Artificial Intelligence">Computer Science and Artificial Intelligence (CSAI)</option>
                <option value="Computer Science and Data Science">Computer Science and Data Science (CSDS)</option>
                <option value="Information Technology">Information Technology (IT)</option>
                <option value="Electronics and Communication Engineering">Electronics and Communication Engineering (ECE)</option>
                <option value="Electrical and Electronics Engineering">Electrical and Electronics Engineering (EEE)</option>
                <option value="Mechanical Engineering">Mechanical Engineering (MECH)</option>
                <option value="Civil Engineering">Civil Engineering (CIVIL)</option>
                <option value="Chemical Engineering">Chemical Engineering (CHEM)</option>
                <option value="Biotechnology">Biotechnology (BT)</option>
                <option value="Aerospace Engineering">Aerospace Engineering (AERO)</option>
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Business Administration">Business Administration (MBA)</option>
                <option value="Commerce">Commerce</option>
                <option value="Economics">Economics</option>
                <option value="Other">Other</option>
              </Select>
              {errors.department && <ErrorMessage>{errors.department}</ErrorMessage>}
            </FormGroup>

            <FormGroup>
              <Label>
                College Email <RequiredIndicator>*</RequiredIndicator>
              </Label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="99230304000@klu.ac.in"
                style={{
                  borderColor: errors.email ? "var(--medium-red)" : undefined,
                }}
              />
              {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
            </FormGroup>

            <SubmitButton
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Proceed to Payment →
            </SubmitButton>
          </Form>
        </>
        ) : (
          <>
            <Form 
              onSubmit={handleSubmit}
              as={motion.form}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <QRScannerContainer>
                <h4>� Scan & Pay</h4>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                  Scan the QR code below with any UPI app to make the payment
                </p>
                
                <QRCodeDisplay>
                  <img 
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='white'/%3E%3Cg fill='black'%3E%3Crect x='0' y='0' width='14' height='14'/%3E%3Crect x='28' y='0' width='14' height='14'/%3E%3Crect x='42' y='0' width='14' height='14'/%3E%3Crect x='70' y='0' width='14' height='14'/%3E%3Crect x='84' y='0' width='14' height='14'/%3E%3Crect x='112' y='0' width='14' height='14'/%3E%3Crect x='140' y='0' width='14' height='14'/%3E%3Crect x='154' y='0' width='14' height='14'/%3E%3Crect x='168' y='0' width='14' height='14'/%3E%3Crect x='182' y='0' width='14' height='14'/%3E%3Crect x='0' y='14' width='14' height='14'/%3E%3Crect x='84' y='14' width='14' height='14'/%3E%3Crect x='182' y='14' width='14' height='14'/%3E%3Crect x='0' y='28' width='14' height='14'/%3E%3Crect x='28' y='28' width='14' height='14'/%3E%3Crect x='42' y='28' width='14' height='14'/%3E%3Crect x='56' y='28' width='14' height='14'/%3E%3Crect x='84' y='28' width='14' height='14'/%3E%3Crect x='126' y='28' width='14' height='14'/%3E%3Crect x='154' y='28' width='14' height='14'/%3E%3Crect x='168' y='28' width='14' height='14'/%3E%3Crect x='182' y='28' width='14' height='14'/%3E%3Crect x='0' y='42' width='14' height='14'/%3E%3Crect x='28' y='42' width='14' height='14'/%3E%3Crect x='42' y='42' width='14' height='14'/%3E%3Crect x='56' y='42' width='14' height='14'/%3E%3Crect x='84' y='42' width='14' height='14'/%3E%3Crect x='126' y='42' width='14' height='14'/%3E%3Crect x='154' y='42' width='14' height='14'/%3E%3Crect x='168' y='42' width='14' height='14'/%3E%3Crect x='182' y='42' width='14' height='14'/%3E%3Crect x='0' y='56' width='14' height='14'/%3E%3Crect x='28' y='56' width='14' height='14'/%3E%3Crect x='42' y='56' width='14' height='14'/%3E%3Crect x='56' y='56' width='14' height='14'/%3E%3Crect x='84' y='56' width='14' height='14'/%3E%3Crect x='126' y='56' width='14' height='14'/%3E%3Crect x='154' y='56' width='14' height='14'/%3E%3Crect x='168' y='56' width='14' height='14'/%3E%3Crect x='182' y='56' width='14' height='14'/%3E%3Crect x='0' y='70' width='14' height='14'/%3E%3Crect x='84' y='70' width='14' height='14'/%3E%3Crect x='182' y='70' width='14' height='14'/%3E%3Crect x='0' y='84' width='14' height='14'/%3E%3Crect x='28' y='84' width='14' height='14'/%3E%3Crect x='42' y='84' width='14' height='14'/%3E%3Crect x='70' y='84' width='14' height='14'/%3E%3Crect x='84' y='84' width='14' height='14'/%3E%3Crect x='112' y='84' width='14' height='14'/%3E%3Crect x='140' y='84' width='14' height='14'/%3E%3Crect x='154' y='84' width='14' height='14'/%3E%3Crect x='168' y='84' width='14' height='14'/%3E%3Crect x='182' y='84' width='14' height='14'/%3E%3Crect x='112' y='98' width='14' height='14'/%3E%3Crect x='14' y='112' width='14' height='14'/%3E%3Crect x='42' y='112' width='14' height='14'/%3E%3Crect x='56' y='112' width='14' height='14'/%3E%3Crect x='70' y='112' width='14' height='14'/%3E%3Crect x='98' y='112' width='14' height='14'/%3E%3Crect x='140' y='112' width='14' height='14'/%3E%3Crect x='168' y='112' width='14' height='14'/%3E%3Crect x='0' y='126' width='14' height='14'/%3E%3Crect x='28' y='126' width='14' height='14'/%3E%3Crect x='42' y='126' width='14' height='14'/%3E%3Crect x='70' y='126' width='14' height='14'/%3E%3Crect x='84' y='126' width='14' height='14'/%3E%3Crect x='112' y='126' width='14' height='14'/%3E%3Crect x='140' y='126' width='14' height='14'/%3E%3Crect x='154' y='126' width='14' height='14'/%3E%3Crect x='168' y='126' width='14' height='14'/%3E%3Crect x='182' y='126' width='14' height='14'/%3E%3Crect x='0' y='140' width='14' height='14'/%3E%3Crect x='84' y='140' width='14' height='14'/%3E%3Crect x='112' y='140' width='14' height='14'/%3E%3Crect x='126' y='140' width='14' height='14'/%3E%3Crect x='154' y='140' width='14' height='14'/%3E%3Crect x='182' y='140' width='14' height='14'/%3E%3Crect x='0' y='154' width='14' height='14'/%3E%3Crect x='28' y='154' width='14' height='14'/%3E%3Crect x='42' y='154' width='14' height='14'/%3E%3Crect x='56' y='154' width='14' height='14'/%3E%3Crect x='84' y='154' width='14' height='14'/%3E%3Crect x='126' y='154' width='14' height='14'/%3E%3Crect x='154' y='154' width='14' height='14'/%3E%3Crect x='168' y='154' width='14' height='14'/%3E%3Crect x='182' y='154' width='14' height='14'/%3E%3Crect x='0' y='168' width='14' height='14'/%3E%3Crect x='28' y='168' width='14' height='14'/%3E%3Crect x='42' y='168' width='14' height='14'/%3E%3Crect x='56' y='168' width='14' height='14'/%3E%3Crect x='84' y='168' width='14' height='14'/%3E%3Crect x='126' y='168' width='14' height='14'/%3E%3Crect x='154' y='168' width='14' height='14'/%3E%3Crect x='168' y='168' width='14' height='14'/%3E%3Crect x='182' y='168' width='14' height='14'/%3E%3Crect x='0' y='182' width='14' height='14'/%3E%3Crect x='28' y='182' width='14' height='14'/%3E%3Crect x='42' y='182' width='14' height='14'/%3E%3Crect x='56' y='182' width='14' height='14'/%3E%3Crect x='84' y='182' width='14' height='14'/%3E%3Crect x='126' y='182' width='14' height='14'/%3E%3Crect x='154' y='182' width='14' height='14'/%3E%3Crect x='168' y='182' width='14' height='14'/%3E%3Crect x='182' y='182' width='14' height='14'/%3E%3C/g%3E%3C/svg%3E" 
                    alt="UPI QR Code for Payment"
                  />
                </QRCodeDisplay>

                <PaymentDetails>
                  <h5>💳 Payment Details</h5>
                  <p><strong>Amount:</strong> <span>₹75</span></p>
                 
                </PaymentDetails>

               
              </QRScannerContainer>

              <FormGroup>
                <Label>
                  Transaction ID <RequiredIndicator>*</RequiredIndicator>
                </Label>
                <Input
                  name="transactionId"
                  type="text"
                  value={paymentData.transactionId}
                  onChange={handlePaymentChange}
                  placeholder="Enter UPI/Bank transaction ID"
                  style={{
                    borderColor: errors.transactionId ? "var(--medium-red)" : undefined,
                  }}
                />
                {errors.transactionId && <ErrorMessage>{errors.transactionId}</ErrorMessage>}
              </FormGroup>

              <FormGroup>
                <Label>
                  Payment Screenshot <RequiredIndicator>*</RequiredIndicator>
                </Label>
                <FileUploadArea onClick={() => document.getElementById('screenshot-upload').click()}>
                  <FileInput
                    id="screenshot-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                  />
                  {paymentData.screenshotPreview ? (
                    <ImagePreview>
                      <img 
                        src={paymentData.screenshotPreview} 
                        alt="Payment screenshot" 
                      />
                      <p>Click to change screenshot</p>
                    </ImagePreview>
                  ) : (
                    <div>
                      <p style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📷</p>
                      <p><strong>Click to upload payment screenshot</strong></p>
                      <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                        JPG, PNG, WEBP (max 5MB)
                      </p>
                    </div>
                  )}
                </FileUploadArea>
                {errors.screenshot && <ErrorMessage>{errors.screenshot}</ErrorMessage>}
              </FormGroup>

              {submitError && (
                <ErrorMessage style={{ marginBottom: "1rem", fontSize: "1rem" }}>
                  {submitError}
                </ErrorMessage>
              )}

              <ButtonGroup>
                <BackButton2
                  type="button"
                  onClick={goBackToRegistration}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  ← Back to Registration
                </BackButton2>
                
                <SubmitButton
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ flex: 2 }}
                >
                  {isSubmitting ? "Completing Registration..." : "Complete Registration"}
                </SubmitButton>
              </ButtonGroup>
            </Form>
          </>
        )}

        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <BackButton to="/events">
            ← Back to Events
          </BackButton>
        </div>
      </Container>
    </MLEventSection>
  );
};

export default MLEvent;

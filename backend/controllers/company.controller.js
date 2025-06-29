import {company} from "../models/company.model.js";

export const registerCompany = async (req, res) => {
  try{
     const {companyName} = req.bdy;
     if(!companyName){
      return res.status(400).json({
        message:"Company name is required",
        success:false
      });
     }
     let Company = await Company.findOne({name:companyName});
      if(company){
        return res.status(400).json({
          message:"You can't register same company.",
          success:false
        })
      };
      company = await company.create({
        name:companyName,
        userId:req.id
      });

      return res.status(201).json({
        message:"Company registered successfully.",
        Company,
        success:true
      })
  }catch(error){
    console.log(error);
    
  }
}
export const getCompany = async (req, res) => {
  try {
     const userId = req.id;  //logged in user id
     const companies = await Company.find({userId});
     if(!companies) {
      return res.status(404).json({
        message:"companies not found.",
        success:false
      })
     }
     return res.status(200).json({
      companies,
      success:true
     })
  }catch(error){
    console.log(error);
    
  }
}
// get company by id 
export const getCompanybyId = async (req, res) => {
  try {
      const companyId = req.params.id;
      const company = await company.findById(companyId);
      if(!company){
        return res.status(404).json({
          message:"company not found.",
          success:false
        })
      }
      return res.status(200).json({
        company,
        success:true
      })
  }catch(error){
    console.log(error);
    
  }
}
export const updateCompany = async(req, res) => {
  try{
     const {name, description, website, location} = req.body;
     const file = req.file;
     // comes here cloudinary

    const updateData = {name, description, website, location};

    const company = await company.findByIdAndUpdate(req.params.ud, updateData,{new: true});

    if(!company){
      return res.status(404).json({
        message:"compan not found.",
        success:false
      })
    }
    return res.status(200).json({
      message:"company information updated,",
      success:true
    })

  }catch(error) {
    console.log(error);
    
  }
}
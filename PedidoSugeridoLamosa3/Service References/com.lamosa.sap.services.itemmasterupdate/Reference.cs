﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:2.0.50727.3625
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace com.lamosa.sap.services.itemmasterupdate {
    
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "3.0.0.0")]
    [System.ServiceModel.ServiceContractAttribute(Namespace="http://lamosa.com/A2A/PedidoSugerido", ConfigurationName="com.lamosa.sap.services.itemmasterupdate.SI_ItemMasterUpdate_Outbound")]
    public interface SI_ItemMasterUpdate_Outbound {
        
        // CODEGEN: Generating message contract since the operation SI_ItemMasterUpdate_Outbound is neither RPC nor document wrapped.
        [System.ServiceModel.OperationContractAttribute(Action="http://sap.com/xi/WebService/soap1.1", ReplyAction="*")]
        [System.ServiceModel.XmlSerializerFormatAttribute()]
        com.lamosa.sap.services.itemmasterupdate.SI_ItemMasterUpdate_OutboundResponse SI_ItemMasterUpdate_Outbound(com.lamosa.sap.services.itemmasterupdate.SI_ItemMasterUpdate_OutboundRequest request);
    }
    
    /// <remarks/>
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Xml", "2.0.50727.3082")]
    [System.SerializableAttribute()]
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(Namespace="http://lamosa.com/A2A/PedidoSugerido")]
    public partial class DT_ItemMasterUpdate_request : object, System.ComponentModel.INotifyPropertyChanged {
        
        private string compayIdField;
        
        private string customerIdField;
        
        private DT_ItemMasterUpdate_requestItem[] itemsField;
        
        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(Form=System.Xml.Schema.XmlSchemaForm.Unqualified, Order=0)]
        public string CompayId {
            get {
                return this.compayIdField;
            }
            set {
                this.compayIdField = value;
                this.RaisePropertyChanged("CompayId");
            }
        }
        
        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(Form=System.Xml.Schema.XmlSchemaForm.Unqualified, Order=1)]
        public string CustomerId {
            get {
                return this.customerIdField;
            }
            set {
                this.customerIdField = value;
                this.RaisePropertyChanged("CustomerId");
            }
        }
        
        /// <remarks/>
        [System.Xml.Serialization.XmlArrayAttribute(Form=System.Xml.Schema.XmlSchemaForm.Unqualified, Order=2)]
        [System.Xml.Serialization.XmlArrayItemAttribute("Item", Form=System.Xml.Schema.XmlSchemaForm.Unqualified, IsNullable=false)]
        public DT_ItemMasterUpdate_requestItem[] Items {
            get {
                return this.itemsField;
            }
            set {
                this.itemsField = value;
                this.RaisePropertyChanged("Items");
            }
        }
        
        public event System.ComponentModel.PropertyChangedEventHandler PropertyChanged;
        
        protected void RaisePropertyChanged(string propertyName) {
            System.ComponentModel.PropertyChangedEventHandler propertyChanged = this.PropertyChanged;
            if ((propertyChanged != null)) {
                propertyChanged(this, new System.ComponentModel.PropertyChangedEventArgs(propertyName));
            }
        }
    }
    
    /// <remarks/>
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Xml", "2.0.50727.3082")]
    [System.SerializableAttribute()]
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(AnonymousType=true, Namespace="http://lamosa.com/A2A/PedidoSugerido")]
    public partial class DT_ItemMasterUpdate_requestItem : object, System.ComponentModel.INotifyPropertyChanged {
        
        private string itemIdField;
        
        private string itemCustomerIdField;
        
        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(Form=System.Xml.Schema.XmlSchemaForm.Unqualified, Order=0)]
        public string ItemId {
            get {
                return this.itemIdField;
            }
            set {
                this.itemIdField = value;
                this.RaisePropertyChanged("ItemId");
            }
        }
        
        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(Form=System.Xml.Schema.XmlSchemaForm.Unqualified, Order=1)]
        public string ItemCustomerId {
            get {
                return this.itemCustomerIdField;
            }
            set {
                this.itemCustomerIdField = value;
                this.RaisePropertyChanged("ItemCustomerId");
            }
        }
        
        public event System.ComponentModel.PropertyChangedEventHandler PropertyChanged;
        
        protected void RaisePropertyChanged(string propertyName) {
            System.ComponentModel.PropertyChangedEventHandler propertyChanged = this.PropertyChanged;
            if ((propertyChanged != null)) {
                propertyChanged(this, new System.ComponentModel.PropertyChangedEventArgs(propertyName));
            }
        }
    }
    
    /// <remarks/>
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.Xml", "2.0.50727.3082")]
    [System.SerializableAttribute()]
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.ComponentModel.DesignerCategoryAttribute("code")]
    [System.Xml.Serialization.XmlTypeAttribute(Namespace="http://lamosa.com/A2A/PedidoSugerido")]
    public partial class DT_ItemMasterUpdate_response : object, System.ComponentModel.INotifyPropertyChanged {
        
        private string processedField;
        
        /// <remarks/>
        [System.Xml.Serialization.XmlElementAttribute(Form=System.Xml.Schema.XmlSchemaForm.Unqualified, Order=0)]
        public string Processed {
            get {
                return this.processedField;
            }
            set {
                this.processedField = value;
                this.RaisePropertyChanged("Processed");
            }
        }
        
        public event System.ComponentModel.PropertyChangedEventHandler PropertyChanged;
        
        protected void RaisePropertyChanged(string propertyName) {
            System.ComponentModel.PropertyChangedEventHandler propertyChanged = this.PropertyChanged;
            if ((propertyChanged != null)) {
                propertyChanged(this, new System.ComponentModel.PropertyChangedEventArgs(propertyName));
            }
        }
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "3.0.0.0")]
    [System.ServiceModel.MessageContractAttribute(IsWrapped=false)]
    public partial class SI_ItemMasterUpdate_OutboundRequest {
        
        [System.ServiceModel.MessageBodyMemberAttribute(Namespace="http://lamosa.com/A2A/PedidoSugerido", Order=0)]
        public com.lamosa.sap.services.itemmasterupdate.DT_ItemMasterUpdate_request MT_ItemMasterUpdate_request;
        
        public SI_ItemMasterUpdate_OutboundRequest() {
        }
        
        public SI_ItemMasterUpdate_OutboundRequest(com.lamosa.sap.services.itemmasterupdate.DT_ItemMasterUpdate_request MT_ItemMasterUpdate_request) {
            this.MT_ItemMasterUpdate_request = MT_ItemMasterUpdate_request;
        }
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "3.0.0.0")]
    [System.ServiceModel.MessageContractAttribute(IsWrapped=false)]
    public partial class SI_ItemMasterUpdate_OutboundResponse {
        
        [System.ServiceModel.MessageBodyMemberAttribute(Namespace="http://lamosa.com/A2A/PedidoSugerido", Order=0)]
        public com.lamosa.sap.services.itemmasterupdate.DT_ItemMasterUpdate_response MT_ItemMasterUpdate_response;
        
        public SI_ItemMasterUpdate_OutboundResponse() {
        }
        
        public SI_ItemMasterUpdate_OutboundResponse(com.lamosa.sap.services.itemmasterupdate.DT_ItemMasterUpdate_response MT_ItemMasterUpdate_response) {
            this.MT_ItemMasterUpdate_response = MT_ItemMasterUpdate_response;
        }
    }
    
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "3.0.0.0")]
    public interface SI_ItemMasterUpdate_OutboundChannel : com.lamosa.sap.services.itemmasterupdate.SI_ItemMasterUpdate_Outbound, System.ServiceModel.IClientChannel {
    }
    
    [System.Diagnostics.DebuggerStepThroughAttribute()]
    [System.CodeDom.Compiler.GeneratedCodeAttribute("System.ServiceModel", "3.0.0.0")]
    public partial class SI_ItemMasterUpdate_OutboundClient : System.ServiceModel.ClientBase<com.lamosa.sap.services.itemmasterupdate.SI_ItemMasterUpdate_Outbound>, com.lamosa.sap.services.itemmasterupdate.SI_ItemMasterUpdate_Outbound {
        
        public SI_ItemMasterUpdate_OutboundClient() {
        }
        
        public SI_ItemMasterUpdate_OutboundClient(string endpointConfigurationName) : 
                base(endpointConfigurationName) {
        }
        
        public SI_ItemMasterUpdate_OutboundClient(string endpointConfigurationName, string remoteAddress) : 
                base(endpointConfigurationName, remoteAddress) {
        }
        
        public SI_ItemMasterUpdate_OutboundClient(string endpointConfigurationName, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(endpointConfigurationName, remoteAddress) {
        }
        
        public SI_ItemMasterUpdate_OutboundClient(System.ServiceModel.Channels.Binding binding, System.ServiceModel.EndpointAddress remoteAddress) : 
                base(binding, remoteAddress) {
        }
        
        [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Advanced)]
        com.lamosa.sap.services.itemmasterupdate.SI_ItemMasterUpdate_OutboundResponse com.lamosa.sap.services.itemmasterupdate.SI_ItemMasterUpdate_Outbound.SI_ItemMasterUpdate_Outbound(com.lamosa.sap.services.itemmasterupdate.SI_ItemMasterUpdate_OutboundRequest request) {
            return base.Channel.SI_ItemMasterUpdate_Outbound(request);
        }
        
        public com.lamosa.sap.services.itemmasterupdate.DT_ItemMasterUpdate_response SI_ItemMasterUpdate_Outbound(com.lamosa.sap.services.itemmasterupdate.DT_ItemMasterUpdate_request MT_ItemMasterUpdate_request) {
            com.lamosa.sap.services.itemmasterupdate.SI_ItemMasterUpdate_OutboundRequest inValue = new com.lamosa.sap.services.itemmasterupdate.SI_ItemMasterUpdate_OutboundRequest();
            inValue.MT_ItemMasterUpdate_request = MT_ItemMasterUpdate_request;
            com.lamosa.sap.services.itemmasterupdate.SI_ItemMasterUpdate_OutboundResponse retVal = ((com.lamosa.sap.services.itemmasterupdate.SI_ItemMasterUpdate_Outbound)(this)).SI_ItemMasterUpdate_Outbound(inValue);
            return retVal.MT_ItemMasterUpdate_response;
        }
    }
}

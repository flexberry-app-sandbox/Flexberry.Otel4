﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Otel4
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Доступ.
    /// </summary>
    // *** Start programmer edit section *** (Доступ CustomAttributes)

    // *** End programmer edit section *** (Доступ CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ДоступE", new string[] {
            "КодДоступа as \'Код доступа\'",
            "Доступ as \'Доступ\'",
            "СмартКлюч as \'Смарт ключ\'",
            "СмартКлюч.КодКлюча as \'Код смарт ключа\'",
            "СмартКлюч.Статус as \'Статус смарт ключа\'",
            "Сотрудник as \'Сотрудник\'",
            "Сотрудник.ФИО as \'ФИО\'",
            "Комната as \'Комната\'",
            "Комната.КодКомнаты as \'Код комнаты\'",
            "Комната.Класс as \'Класс комнаты\'",
            "Комната.КолвоМест as \'Количество мест \'",
            "Комната.Стоимость as \'Стоимотсь комнаты в день\'"}, Hidden=new string[] {
            "СмартКлюч.КодКлюча",
            "Сотрудник.ФИО",
            "Комната.КодКомнаты"})]
    [AssociatedDetailViewAttribute("ДоступE", "РегистрЗаписи", "РегистрЗаписиE", true, "", "Регистр записи", true, new string[] {
            ""})]
    [AssociatedDetailViewAttribute("ДоступE", "Гости", "ГостиE", true, "", "Гости", true, new string[] {
            ""})]
    [MasterViewDefineAttribute("ДоступE", "СмартКлюч", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "КодКлюча")]
    [MasterViewDefineAttribute("ДоступE", "Сотрудник", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "ФИО")]
    [MasterViewDefineAttribute("ДоступE", "Комната", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "КодКомнаты")]
    [View("ДоступL", new string[] {
            "КодДоступа as \'Код доступа\'",
            "Доступ as \'Доступ\'",
            "СмартКлюч.Статус as \'Статус смарт ключа\'",
            "Сотрудник.ФИО as \'ФИО\'",
            "Комната.КодКомнаты as \'Код комнаты\'"})]
    public class Доступ : ICSSoft.STORMNET.DataObject
    {
        
        private int fКодДоступа;
        
        private bool fДоступ;
        
        private IIS.Otel4.СмартКлюч fСмартКлюч;
        
        private IIS.Otel4.Сотрудник fСотрудник;
        
        private IIS.Otel4.Комната fКомната;
        
        private IIS.Otel4.DetailArrayOfГости fГости;
        
        private IIS.Otel4.DetailArrayOfРегистрЗаписи fРегистрЗаписи;
        
        // *** Start programmer edit section *** (Доступ CustomMembers)

        // *** End programmer edit section *** (Доступ CustomMembers)

        
        /// <summary>
        /// Доступ.
        /// </summary>
        // *** Start programmer edit section *** (Доступ.Доступ CustomAttributes)

        // *** End programmer edit section *** (Доступ.Доступ CustomAttributes)
        public virtual bool Доступ
        {
            get
            {
                // *** Start programmer edit section *** (Доступ.Доступ Get start)

                // *** End programmer edit section *** (Доступ.Доступ Get start)
                bool result = this.fДоступ;
                // *** Start programmer edit section *** (Доступ.Доступ Get end)

                // *** End programmer edit section *** (Доступ.Доступ Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Доступ.Доступ Set start)

                // *** End programmer edit section *** (Доступ.Доступ Set start)
                this.fДоступ = value;
                // *** Start programmer edit section *** (Доступ.Доступ Set end)

                // *** End programmer edit section *** (Доступ.Доступ Set end)
            }
        }
        
        /// <summary>
        /// КодДоступа.
        /// </summary>
        // *** Start programmer edit section *** (Доступ.КодДоступа CustomAttributes)

        // *** End programmer edit section *** (Доступ.КодДоступа CustomAttributes)
        public virtual int КодДоступа
        {
            get
            {
                // *** Start programmer edit section *** (Доступ.КодДоступа Get start)

                // *** End programmer edit section *** (Доступ.КодДоступа Get start)
                int result = this.fКодДоступа;
                // *** Start programmer edit section *** (Доступ.КодДоступа Get end)

                // *** End programmer edit section *** (Доступ.КодДоступа Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Доступ.КодДоступа Set start)

                // *** End programmer edit section *** (Доступ.КодДоступа Set start)
                this.fКодДоступа = value;
                // *** Start programmer edit section *** (Доступ.КодДоступа Set end)

                // *** End programmer edit section *** (Доступ.КодДоступа Set end)
            }
        }
        
        /// <summary>
        /// Доступ.
        /// </summary>
        // *** Start programmer edit section *** (Доступ.Комната CustomAttributes)

        // *** End programmer edit section *** (Доступ.Комната CustomAttributes)
        [PropertyStorage(new string[] {
                "Комната"})]
        [NotNull()]
        public virtual IIS.Otel4.Комната Комната
        {
            get
            {
                // *** Start programmer edit section *** (Доступ.Комната Get start)

                // *** End programmer edit section *** (Доступ.Комната Get start)
                IIS.Otel4.Комната result = this.fКомната;
                // *** Start programmer edit section *** (Доступ.Комната Get end)

                // *** End programmer edit section *** (Доступ.Комната Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Доступ.Комната Set start)

                // *** End programmer edit section *** (Доступ.Комната Set start)
                this.fКомната = value;
                // *** Start programmer edit section *** (Доступ.Комната Set end)

                // *** End programmer edit section *** (Доступ.Комната Set end)
            }
        }
        
        /// <summary>
        /// Доступ.
        /// </summary>
        // *** Start programmer edit section *** (Доступ.СмартКлюч CustomAttributes)

        // *** End programmer edit section *** (Доступ.СмартКлюч CustomAttributes)
        [PropertyStorage(new string[] {
                "СмартКлюч"})]
        [NotNull()]
        public virtual IIS.Otel4.СмартКлюч СмартКлюч
        {
            get
            {
                // *** Start programmer edit section *** (Доступ.СмартКлюч Get start)

                // *** End programmer edit section *** (Доступ.СмартКлюч Get start)
                IIS.Otel4.СмартКлюч result = this.fСмартКлюч;
                // *** Start programmer edit section *** (Доступ.СмартКлюч Get end)

                // *** End programmer edit section *** (Доступ.СмартКлюч Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Доступ.СмартКлюч Set start)

                // *** End programmer edit section *** (Доступ.СмартКлюч Set start)
                this.fСмартКлюч = value;
                // *** Start programmer edit section *** (Доступ.СмартКлюч Set end)

                // *** End programmer edit section *** (Доступ.СмартКлюч Set end)
            }
        }
        
        /// <summary>
        /// Доступ.
        /// </summary>
        // *** Start programmer edit section *** (Доступ.Сотрудник CustomAttributes)

        // *** End programmer edit section *** (Доступ.Сотрудник CustomAttributes)
        [PropertyStorage(new string[] {
                "Сотрудник"})]
        [NotNull()]
        public virtual IIS.Otel4.Сотрудник Сотрудник
        {
            get
            {
                // *** Start programmer edit section *** (Доступ.Сотрудник Get start)

                // *** End programmer edit section *** (Доступ.Сотрудник Get start)
                IIS.Otel4.Сотрудник result = this.fСотрудник;
                // *** Start programmer edit section *** (Доступ.Сотрудник Get end)

                // *** End programmer edit section *** (Доступ.Сотрудник Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Доступ.Сотрудник Set start)

                // *** End programmer edit section *** (Доступ.Сотрудник Set start)
                this.fСотрудник = value;
                // *** Start programmer edit section *** (Доступ.Сотрудник Set end)

                // *** End programmer edit section *** (Доступ.Сотрудник Set end)
            }
        }
        
        /// <summary>
        /// Доступ.
        /// </summary>
        // *** Start programmer edit section *** (Доступ.Гости CustomAttributes)

        // *** End programmer edit section *** (Доступ.Гости CustomAttributes)
        public virtual IIS.Otel4.DetailArrayOfГости Гости
        {
            get
            {
                // *** Start programmer edit section *** (Доступ.Гости Get start)

                // *** End programmer edit section *** (Доступ.Гости Get start)
                if ((this.fГости == null))
                {
                    this.fГости = new IIS.Otel4.DetailArrayOfГости(this);
                }
                IIS.Otel4.DetailArrayOfГости result = this.fГости;
                // *** Start programmer edit section *** (Доступ.Гости Get end)

                // *** End programmer edit section *** (Доступ.Гости Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Доступ.Гости Set start)

                // *** End programmer edit section *** (Доступ.Гости Set start)
                this.fГости = value;
                // *** Start programmer edit section *** (Доступ.Гости Set end)

                // *** End programmer edit section *** (Доступ.Гости Set end)
            }
        }
        
        /// <summary>
        /// Доступ.
        /// </summary>
        // *** Start programmer edit section *** (Доступ.РегистрЗаписи CustomAttributes)

        // *** End programmer edit section *** (Доступ.РегистрЗаписи CustomAttributes)
        public virtual IIS.Otel4.DetailArrayOfРегистрЗаписи РегистрЗаписи
        {
            get
            {
                // *** Start programmer edit section *** (Доступ.РегистрЗаписи Get start)

                // *** End programmer edit section *** (Доступ.РегистрЗаписи Get start)
                if ((this.fРегистрЗаписи == null))
                {
                    this.fРегистрЗаписи = new IIS.Otel4.DetailArrayOfРегистрЗаписи(this);
                }
                IIS.Otel4.DetailArrayOfРегистрЗаписи result = this.fРегистрЗаписи;
                // *** Start programmer edit section *** (Доступ.РегистрЗаписи Get end)

                // *** End programmer edit section *** (Доступ.РегистрЗаписи Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Доступ.РегистрЗаписи Set start)

                // *** End programmer edit section *** (Доступ.РегистрЗаписи Set start)
                this.fРегистрЗаписи = value;
                // *** Start programmer edit section *** (Доступ.РегистрЗаписи Set end)

                // *** End programmer edit section *** (Доступ.РегистрЗаписи Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ДоступE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ДоступE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ДоступE", typeof(IIS.Otel4.Доступ));
                }
            }
            
            /// <summary>
            /// "ДоступL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ДоступL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ДоступL", typeof(IIS.Otel4.Доступ));
                }
            }
        }
    }
}

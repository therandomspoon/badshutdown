stringvar text:="";
if {BAQReportResult.RMARcpt.OurReceivedQty}>0 then 
text="{BAQReportResult.RMARcpt.RMAReceipt}"
else
text="There are ..."

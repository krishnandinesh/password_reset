function showHideSyncDetails(value) {
    var syncArray = new Array(10);
    syncArray = ["windows", "windowsdomain", "linux", "mssql", "ciscoios", "hpprocurve", "netscreen", "mysql", "pgsql", "weblogic", "sybase", "oracle", "ldapserver", "hpilo", "esxi", "awsiam", "gapps", "office365", "rackspace", "salesforce", "CustomCli"];//NO I18N
    titleArray = ['Configure Windows Password Reset', 'Configure Windows Domain Password Reset', 'Configure Linux Password Reset', 'Configure MSSQL Server Password Reset', 'Configure Cisco Router Password Reset', 'Configure HP ProCurve Switch Password Reset', 'Configure Juniper NetScreen ScreenOS Password Reset', 'Configure MySQL Server Password Reset', 'Configure PostgreSQL Server Password Reset', 'Configure WebLogic Password Reset', 'Configure Sybase Server Password Reset', 'Configure Oracle DB Server Password Reset', 'Configure LDAP Server Password Reset', 'Configure HP iLO Password Reset', 'Configure VMWare ESXi Password Reset', 'Configure AWS IAM Password Reset', 'Configure Google Apps Password Reset', 'Configure Microsoft Azure Password Reset', 'Configure Rackspace Password Reset', 'Configure Salesforce Password Reset', 'Configure SSH Command Set Password Reset'];
    var x = 0;
    for (x = 0; x < syncArray.length; x++) {
        if (syncArray[x] == value) {
            document.getElementById(value).className = "";
            document.getElementById(value + "_li").className = "bs_selected";
            document.getElementById("sync_title").innerHTML = titleArray[x];
        }
        else {
            if (document.getElementById(syncArray[x]) != null) {
                document.getElementById(syncArray[x]).className = "hide"; // NO I18N
                document.getElementById(syncArray[x] + "_li").className = ""; // NO I18N
            }
        }
    }
}

function enableWin() {
    document.getElementById('win1').style.display = 'flex';
    document.getElementById('win2').style.display = 'flex';
    document.getElementById('mssql1').style.display = 'none';
}

function enableMssql() {
    document.getElementById('win1').style.display = 'none';
    document.getElementById('win2').style.display = 'none';
    document.getElementById('mssql1').style.display = 'flex';
}

$('.form-wrapper').perfectScrollbar();

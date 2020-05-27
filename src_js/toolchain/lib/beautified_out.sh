function error {
	echo -e "\033[0;31mError: ${1}\033[0m" 1>&2
}

function info {
	echo -e "\033[0;32m${1}\033[0m"
}

function normal {
    echo ${1}
}

function warning {
    echo -e "\033[0;33m${1}\033[0m"
}

function usage {
	echo -e "\033[0;31mUsage: "${@}"\033[0m" 1>&2
}
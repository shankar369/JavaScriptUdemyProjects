class temp{
    public static String removeVowels(String str){
        str = str.replaceAll("[AaEeIiOoUu]", "");
		return str;
    }
    public static void main(String args[]){
        System.out.print(removeVowels("aeiousdfasdfcvxxcvxcv"));
    }

}
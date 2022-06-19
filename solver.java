import java.util.Scanner;
public class solver{
    public static void main(String[] args){
        int[][] a= new int[9][9];
        int[] ch=new int[9];
        Scanner sc=new Scanner(System.in);
        for (int i=0;i<=8;i++){
            for(int j=0;j<=8;j++){
                System.out.printf("Enter the value of a "+ i +j);
                a[i][j]= sc.nextInt();
            }
        }
        System.out.println("Following is your given problem");
        for (int i=0;i<=8;i++){
            for(int j=0;j<=8;j++){
                System.out.print(a[i][j]);
                if(j==2||j==5||j==8){
                    System.out.print("  ");
                }
            }
            System.out.println("");

        }


    }
}
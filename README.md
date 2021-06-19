# ITN_BIU
Repo for BIU subject

## Zjazd 1
Zainstalowany pakiet nvm do obsługi różnych wersji node
`nvm list`  
`nvm use 15.12.0`

link na czacie będzie repo do zadania

link do kursu
https://drive.google.com/file/d/1Uy9Zng78hVXdGWNHCZXdtsLgLKmUbP4F/view

Nie było nic do zrobienia, nadrobić i zainstalować typescript

https://github.com/kfranek-pjatk-classrooms/biu-2021-11c-01-giedrys-michal

## Zjazd 2
Zrobione na zajęciach, push do repo
- imie i nazwisko
- rok studiów
- nr tel (fikcyjny)
- adres mailowy
- ostylować
**Nic do zrobienia na następne zajęcia**

## Zjazd 3

### Wykład - 05.08
Odrabianie pierwszego wykładu: **23.05 17:00**  
Wybrać temat projektu (podany w weekend 05.08-09) tutaj: [Lista projektów]()  

### Ćwiczenia
Zadanie:
utworzyć formularz 2 pola tekstowe, przycisk obok, dodawanie więcej wpisów do listy kontaktowej  
**ROZWIĄZANE - wrzuceone na repo**  
Git transfer repo to another with history:  
```
> cd repo2
> git checkout {branchName} // usually it's main
> git remote add repo1 **url-of-repo1**
> git fetch repo1
> git merge repo1/{branchName} --allow-unrelated-histories
if merge conflicts:
    > git status (check which files have conflicts, open in VSC - autodetects and highlights diffs)
    > git add .
    > git commit -m "Message"
> git status
> git remote rm repo1
```
## Zjazd 4
Wszystkie aplikacje muszą mieć stały nagłówek z nazwą aplikacji i menu do najważniejszych podstron, a także stałą stopkę z numerem albumu, imieniem i nazwiskiem autora projektu. Aplikacje mają być wypełnione przykładowymi treściami na początku działania, dane nie muszą być zapisywane i odczytywane z żadnych zewnętrznych aplikacji/usług, wystarczy trzymać je w pamięci operacyjnej. Do jednego tematu może być przypisanych kilku studentów, lecz nie więcej niż 3. Praca grupowa nad projektami nie jest dozwolona.  
- E-dziekanat (strona główna z listą grup studenckich, strona z listą wszystkich studentów i przyciskiem dodawania studenta, strona informacji o studencie z informacjami o grupach, do których go przypisano i przedmiotów, do których przypisane są jego grupy, strona pojedynczej grupy z listą studentów i przyciskiem do okna-modala z możliwością dodania studenta do grupy, strona z listą przedmiotów, strona przedmiotu która wyświetla listę grup przypisanych do przedmiotu)

## Zjazd 6
Na tych zajęciach praca nad projektem i podesłanie prowadzącemu maila do repo  
Wymagania do zaliczenia projektu są w plikach teams od wykładów  
Nie muszą być spełnione wszystkie (poza pierwszymi 4 i 2 ostatnimi pkt.) - nie muszę zawierać użycia modułu forms na siłę.  
Zaliczanie projektów:
- dostarczyć link do repo do północy w piątek 02.07
- każdy będzie miał swoją godzinę zaliczenia, ma zostać jeszcze podana na koniec wykładu ???
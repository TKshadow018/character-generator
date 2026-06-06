

\'*//.;mport tkinter as tkfrom playwright.sync_api import sync_playwright'


def run_automation(countries):
    with sync_playwright() as p:
        browser = p.chromium.launch_persistent_context(user_data_dir="automation_profile", headless=False)
        page = browser.pages[0]
        page.goto("https://gemini.google.com/")
        
        for country in countries:
            # 1. Input Prompt
            page.fill('div[aria-label="Enter a prompt here"]', f"Create a list of 100 city names from {country}")
            page.keyboard.press("Enter")
            
            # 2. Wait for generation (you may need a more robust wait here)
            page.wait_for_timeout(30000) 
            
            # 3. Extract text (update selector based on Gemini's current UI)
            response = page.inner_text('.message-content') 

` `1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
            # 4. Save to file
            with open(f"{country}_cities.txt", "w", encoding="utf-8") as f:
                f.write(response)
        
        browser.close()

# Simple GUI to trigger the job
root = tk.Tk()
btn = tk.Button(root, text="Start 200 Country Loop", command=lambda: run_automation(["France", "Japan", "..."]))
btn.pack()
root.mainloop()/
[/]
\/''
\]
/
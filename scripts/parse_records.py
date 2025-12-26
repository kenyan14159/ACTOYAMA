import json
import re

def parse_records(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    records = []
    current_category = None
    headers = []
    
    # Simple state machine to parse the text file
    for line in lines:
        line = line.strip()
        if not line:
            continue

        # Check if line is a category header (e.g., "小学生男女１００ｍ")
        # Heuristic: Line doesn't start with a number, doesn't look like a data row
        if not re.match(r'^\d+', line) and '\t' not in line and '氏名' not in line and '記録' not in line:
             # It might be a category title
             current_category = line
             headers = [] # Reset headers for new category
             continue
        
        # Check if line is a header row
        if '氏名' in line and '記録' in line:
            headers = line.split('\t')
            continue
            
        # Check if line is a data row (starts with number or contains tab separated values)
        parts = line.split('\t')
        
        if len(parts) >= 2:
            # Create a record object dynamically based on known headers or position
            record = {
                "category": current_category,
                "rank": parts[0] if parts[0].isdigit() else "",
                "name": "",
                "grade": "",
                "gender": "",
                "tournament": "",
                "record": "",
                "wind": "",
                "note": ""
            }
            
            # Mapping based on typical structure found in the file
            # Most common: Rank, Name, Grade, Gender, Tournament, Record, Wind/Note
            
            # Relay format is different: Record, Tournament(Members)
            if 'リレー' in str(current_category):
                 record['record'] = parts[0]
                 if len(parts) > 1:
                     record['note'] = parts[1] # Using note for the rest of relay info
            else:
                # Standard individual record
                # Try to map parts to fields. This assumes a somewhat consistent order from the user's paste.
                # User pasted: Rank, Name, Grade, Gender, Tournament, Record, Wind/Note(Optional)
                
                if len(parts) > 1: record['name'] = parts[1]
                if len(parts) > 2: record['grade'] = parts[2]
                if len(parts) > 3: record['gender'] = parts[3]
                if len(parts) > 4: record['tournament'] = parts[4]
                if len(parts) > 5: record['record'] = parts[5]
                if len(parts) > 6: 
                    # Last column is Wind or Note
                    if '風' in str(headers) or '(' in parts[6] or '±' in parts[6] or '不明' in parts[6]:
                         record['wind'] = parts[6]
                    else:
                         record['note'] = parts[6]

            records.append(record)

    return records

data = parse_records('records_raw.txt')

# Group by category for easier display
grouped_data = {}
for item in data:
    cat = item['category']
    if cat not in grouped_data:
        grouped_data[cat] = []
    grouped_data[cat].append(item)

# Convert to list of objects for frontend
final_json = []
for cat, items in grouped_data.items():
    final_json.append({
        "category": cat,
        "records": items
    })

with open('public/data/records.json', 'w', encoding='utf-8') as f:
    json.dump(final_json, f, ensure_ascii=False, indent=2)

print("Successfully converted records to JSON.")

# Image & Video Guide for FitMan Nation

This guide lists all images and videos needed for the website. All images should be optimized for web (compressed, appropriate formats).

## 📁 Folder Structure

Create these folders in the `public` directory:

```
public/
├── images/
│   ├── backgrounds/
│   ├── mentors/
│   ├── memberships/
│   └── hero-video-poster.jpg
└── videos/
    └── hero-treadmill.mp4 (or .webm)
```

## 🎬 Hero Video (Priority)

**Location:** `public/videos/hero-treadmill.mp4` (or `.webm`)

**Requirements:**
- **Duration:** 5 seconds (looping)
- **Content:** Clients running on treadmills while watching a mentor class on a screen in front of them
- **Format:** MP4 (H.264) or WebM
- **Resolution:** 1920x1080 (Full HD) minimum
- **Aspect Ratio:** 16:9
- **File Size:** Keep under 5MB for fast loading
- **Poster Image:** `public/images/hero-video-poster.jpg` (first frame of video)

**Fallback Image:** `public/images/hero-treadmill-fallback.jpg` (if video doesn't load)

## 🖼️ Background Images

All background images should be:
- **Format:** JPG (optimized)
- **Style:** Black and white or desaturated
- **Resolution:** 1920x1080 or higher
- **File Size:** Under 500KB each (compressed)

### Background Images Needed:

1. **Hero Background**
   - Path: `public/images/hero-background.jpg`
   - Content: Fitness/gym atmosphere, black & white
   - Used in: Hero section

2. **What We Do Background**
   - Path: `public/images/backgrounds/what-we-do-bg.jpg`
   - Content: People working out, community feel
   - Used in: What We Do section

3. **Programs Background**
   - Path: `public/images/backgrounds/programs-bg.jpg`
   - Content: Various fitness activities
   - Used in: Programs overview section

4. **Programs Hero Background**
   - Path: `public/images/backgrounds/programs-hero-bg.jpg`
   - Content: Fitness equipment or training scene
   - Used in: Programs page hero

5. **Programs List Background**
   - Path: `public/images/backgrounds/programs-list-bg.jpg`
   - Content: Training environment
   - Used in: Programs listing page

6. **Testimonials Background**
   - Path: `public/images/backgrounds/testimonials-bg.jpg`
   - Content: Success stories, transformation theme
   - Used in: Testimonials section

7. **Events Background**
   - Path: `public/images/backgrounds/events-bg.jpg`
   - Content: Community events, group activities
   - Used in: Events preview section

8. **About Story Background**
   - Path: `public/images/backgrounds/about-story-bg.jpg`
   - Content: Brand story, inspirational
   - Used in: About page story section

9. **Mission Vision Background**
   - Path: `public/images/backgrounds/mission-vision-bg.jpg`
   - Content: Visionary, goal-oriented
   - Used in: About page mission/vision section

10. **Memberships Hero Background**
    - Path: `public/images/backgrounds/memberships-hero-bg.jpg`
    - Content: Premium membership feel
    - Used in: Memberships page hero

11. **Memberships Background**
    - Path: `public/images/backgrounds/memberships-bg.jpg`
    - Content: Membership benefits, lifestyle
    - Used in: Memberships grid section

## 👥 Mentor Images

**Location:** `public/images/mentors/`

**Requirements:**
- **Format:** JPG
- **Size:** 400x400px (square, will be cropped to circle)
- **Style:** Professional headshots, slightly desaturated
- **File Size:** Under 200KB each

### Mentor Images Needed:

1. **Expert Mentor**
   - Path: `public/images/mentors/expert-mentor.jpg`
   - Content: Professional fitness trainer/coach

2. **Nutrition Specialist**
   - Path: `public/images/mentors/nutrition-specialist.jpg`
   - Content: Dietitian/nutrition expert

3. **Strength Coach**
   - Path: `public/images/mentors/strength-coach.jpg`
   - Content: Strength training specialist

4. **Wellness Guide**
   - Path: `public/images/mentors/wellness-guide.jpg`
   - Content: Yoga/wellness instructor

## 💳 Membership Plan Images

**Location:** `public/images/memberships/`

**Requirements:**
- **Format:** JPG
- **Size:** 800x600px (4:3 aspect ratio)
- **Style:** Lifestyle images showing plan benefits
- **File Size:** Under 300KB each

### Membership Images Needed:

1. **Basic Plan**
   - Path: `public/images/memberships/basic-plan.jpg`
   - Content: Beginner-friendly workout scene

2. **Pro Plan**
   - Path: `public/images/memberships/pro-plan.jpg`
   - Content: Advanced training, transformation focus

3. **Premium Plan**
   - Path: `public/images/memberships/premium-plan.jpg`
   - Content: 1-on-1 coaching, premium experience

## 🎨 Image Guidelines

### Color Scheme
- **Primary:** Black, Red (#DC143C), White
- **Background Images:** Black & white or desaturated (grayscale filter applied)
- **Content Images:** Can have color but should complement brand colors

### Image Optimization Tips

1. **Compression:**
   - Use tools like TinyPNG, ImageOptim, or Squoosh
   - Target: 70-80% quality for JPGs

2. **Formats:**
   - JPG for photos
   - WebP for better compression (optional, with JPG fallback)
   - PNG only for logos/icons

3. **Responsive Images:**
   - Consider creating multiple sizes for different screen sizes
   - Use `srcset` for responsive images (future enhancement)

4. **Lazy Loading:**
   - Images are lazy-loaded automatically by the browser
   - Consider adding `loading="lazy"` attribute

## 📝 Image Placeholders

If images are not available, the site will:
- Show fallback emoji icons for mentors
- Use gradient backgrounds instead of images
- Display error handling gracefully

## ✅ Quick Checklist

- [ ] Hero video (5 seconds, treadmill scene)
- [ ] Hero video poster image
- [ ] 11 background images (black & white)
- [ ] 4 mentor images (professional headshots)
- [ ] 3 membership plan images
- [ ] All images optimized and compressed
- [ ] All images placed in correct folders

## 🔗 Image Sources (Suggestions)

- **Stock Photos:** Unsplash, Pexels, Pixabay (free, high-quality)
- **Fitness Images:** Search for "fitness", "gym", "workout", "training"
- **Professional Photos:** Consider hiring a photographer for mentor images
- **Video:** Consider hiring a videographer or using stock video

## 📱 Mobile Considerations

- All images should work well on mobile devices
- Background images use `background-attachment: fixed` (may need adjustment for mobile)
- Consider lighter images for mobile to reduce data usage

---

**Note:** After adding images, test the site to ensure:
1. All images load correctly
2. Fallbacks work if images are missing
3. Page load speed is acceptable
4. Images look good on all screen sizes








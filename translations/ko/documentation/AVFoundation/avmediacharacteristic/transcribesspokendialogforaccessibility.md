---
source_path: "documentation/AVFoundation/avmediacharacteristic/transcribesspokendialogforaccessibility.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avmediacharacteristic/transcribesspokendialogforaccessibility"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:transcribesspokendialogforaccessibility:0000:0001">transcribesSpokenDialogForAccessibility</span>

<span class="ko-segment" data-segment-id="seg:paragraph:transcribesspokendialogforaccessibility:0001:0001">**Framework**: AVFoundation **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:transcribesspokendialogforaccessibility:0002:0001">미디어 선택 옵션에 발화 대화를 전사한 자막 가능한 콘텐츠가 포함되어 있음을 나타내는 미디어 특성입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:transcribesspokendialogforaccessibility:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:transcribesspokendialogforaccessibility:0004:0001">iOS 5.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:transcribesspokendialogforaccessibility:0004:0002">iPadOS 5.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:transcribesspokendialogforaccessibility:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:transcribesspokendialogforaccessibility:0004:0004">macOS 10.8+</span>
- <span class="ko-segment" data-segment-id="seg:list:transcribesspokendialogforaccessibility:0004:0005">tvOS 9.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:transcribesspokendialogforaccessibility:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:transcribesspokendialogforaccessibility:0004:0007">watchOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
static let transcribesSpokenDialogForAccessibility: AVMediaCharacteristic
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">자막 가능한 미디어 옵션에는 발화 대화의 전사본과 음악 및 음향 효과의 설명이 포함될 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">이 특성의 값은 <code>public.accessibility.transcribes-spoken-dialog</code>입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">QuickTime 동영상과 <code>.m4v</code> 파일의 경우, 미디어 옵션이 이 특성을 가지는 것은 미디어 작성자가 그에 맞게 태그한 경우에만 해당합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avmediacharacteristic/legible.md">static let legible: AVMediaCharacteristic</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">트랙 또는 미디어 선택 옵션에 읽기 가능한 콘텐츠가 포함됨을 나타내는 미디어 특성입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avmovie/tracks.md">static let easyToRead: AVMediaCharacteristic</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">트랙 또는 미디어 선택 옵션이 읽기 쉽게 편집된 가독 가능한 콘텐츠를 제공함을 나타내는 미디어 특성입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avmovie/track(withtrackid:">static let describesVideoForAccessibility: AVMediaCharacteristic</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">미디어에 프레젠테이션의 시각적 부분을 설명하는 청취 가능한 콘텐츠가 포함됨을 나타내는 미디어 특성입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avmovie/tracks(withmediatype:">static let containsOnlyForcedSubtitles: AVMediaCharacteristic</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">트랙 또는 미디어 선택 옵션이 강제 자막만 표시함을 나타내는 미디어 특성입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avmetadatakey/id3metadatakeybeatsperminute.md">static let languageTranslation: AVMediaCharacteristic</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">트랙 또는 미디어 선택 옵션에 원본 콘텐츠의 언어 또는 방언 번역이 포함됨을 나타내는 미디어 특성입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmediacharacteristic/transcribesspokendialogforaccessibility">View on Apple Developer</a>*</span>

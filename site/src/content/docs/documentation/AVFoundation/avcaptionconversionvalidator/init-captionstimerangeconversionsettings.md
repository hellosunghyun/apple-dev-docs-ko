---
source_path: "documentation/AVFoundation/avcaptionconversionvalidator/init-captionstimerangeconversionsettings.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avcaptionconversionvalidator/init-captionstimerangeconversionsettings"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:initcaptionstimerangeconversionsettings:0000:0001">init(captions:timeRange:conversionSettings:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initcaptionstimerangeconversionsettings:0001:0001">**Framework**: AVFoundation **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initcaptionstimerangeconversionsettings:0002:0001">변환 작업의 캡션 유효성 검사를 수행하는 객체를 생성합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initcaptionstimerangeconversionsettings:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:initcaptionstimerangeconversionsettings:0004:0001">iOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initcaptionstimerangeconversionsettings:0004:0002">iPadOS 18.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initcaptionstimerangeconversionsettings:0004:0003">Mac Catalyst 15.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initcaptionstimerangeconversionsettings:0004:0004">macOS 12.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
init(captions: [AVCaption], timeRange: CMTimeRange, conversionSettings: [AVCaptionSettingsKey : Any])
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>captions</code>: 시스템이 유효성 검사를 수행하는 캡션 배열입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>timeRange</code>: 캡션이 존재하는 미디어 타임라인의 시간 범위입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0003"><code>conversionSettings</code>: 변환 작업을 설명하는 사전입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0010:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avcaptionconversionvalidator/init(captions:timerange:conversionsettings:">View on Apple Developer</a>)*</span>

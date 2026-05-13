---
source_path: "documentation/AlarmKit/alarm/schedule-swift.enum/relative/time-swift.struct/init-from.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/alarmkit/alarm/schedule-swift.enum/relative/time-swift.struct/init-from"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:initfrom:0000:0001">init(from:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initfrom:0001:0001">**Framework**: AlarmKit **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initfrom:0002:0001">주어진 디코더에서 디코딩하여 새 인스턴스를 생성합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initfrom:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:initfrom:0004:0001">iOS 26.0+ (Beta)</span>
- <span class="ko-segment" data-segment-id="seg:list:initfrom:0004:0002">iPadOS 26.0+ (Beta)</span>
- <span class="ko-segment" data-segment-id="seg:list:initfrom:0004:0003">Mac Catalyst 26.0+ (Beta)</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
init(from decoder: any Decoder) throws
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이 이니셜라이저는 디코더에서 읽는 작업이 실패하거나 읽은 데이터가 손상되었거나 유효하지 않은 경우 오류를 던집니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>decoder</code>: 데이터를 읽어올 디코더입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:parameters:0012:0001">*<a href="https://developer.apple.com/documentation/alarmkit/alarm/schedule-swift.enum/relative/time-swift.struct/init(from:">View on Apple Developer</a>)*</span>

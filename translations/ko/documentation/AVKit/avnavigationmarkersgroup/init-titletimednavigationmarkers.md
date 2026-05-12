---
source_path: "documentation/AVKit/avnavigationmarkersgroup/init-titletimednavigationmarkers.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avkit/avnavigationmarkersgroup/init-titletimednavigationmarkers"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:inittitletimednavigationmarkers:0000:0001">init(title:timedNavigationMarkers:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:inittitletimednavigationmarkers:0001:0001">**Framework**: AVKit **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:inittitletimednavigationmarkers:0002:0001">지정한 제목과 timedNavigationMarkers 배열로 네비게이션 마커 그룹을 초기화합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:inittitletimednavigationmarkers:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:inittitletimednavigationmarkers:0004:0001">tvOS 9.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
init(title: String?, timedNavigationMarkers navigationMarkers: [AVTimedMetadataGroup])
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">새로운 네비게이션 마커 그룹입니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">재생을 위해 marker 그룹을 에셋과 연동하려면 <a href="https://developer.apple.com/documentation/AVFoundation/AVPlayerItem">@@TOKEN_0@@</a> 객체의 <a href="https://developer.apple.com/documentation/AVFoundation/AVPlayerItem/navigationMarkerGroups">@@TOKEN_1@@</a> 속성을 사용합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">챕터 목록을 만들려면 <code>title</code> 매개변수에 <code>nil</code>을 전달하고 플레이어 항목의 <a href="https://developer.apple.com/documentation/AVFoundation/AVPlayerItem/navigationMarkerGroups">@@TOKEN_2@@</a> 배열에서 해당 그룹을 첫 번째 항목으로 설정합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0002">미디어 탐색을 위한 추가 옵션(예: 녹화된 스포츠 이벤트의 “Goals Scored” 그룹)을 제공하려면 배열의 각 marker 그룹에 고유한 <code>title</code> 값을 지정합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0012:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0001"><code>title</code>: 마커 그룹에 표시할 제목입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0002"><code>navigationMarkers</code>: 그룹이 탐색을 제공하는 timed navigation markers 배열입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0014:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001">[init(title: String?, dateRangeNavigationMarkers: [AVDateRangeMetadataGroup])](avnavigationmarkersgroup/init(title:daterangenavigationmarkers:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">지정된 제목과 날짜 범위 탐색 마커 배열을 사용해 탐색 마커 그룹을 초기화합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">*<a href="https://developer.apple.com/documentation/avkit/avnavigationmarkersgroup/init(title:timednavigationmarkers:">Apple Developer에서 보기</a>)*</span>

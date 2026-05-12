---
source_path: "documentation/AVKit/avnavigationmarkersgroup/init-titledaterangenavigationmarkers.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avkit/avnavigationmarkersgroup/init-titledaterangenavigationmarkers"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:inittitledaterangenavigationmarkers:0000:0001">init(title:dateRangeNavigationMarkers:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:inittitledaterangenavigationmarkers:0001:0001">**Framework**: AVKit **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:inittitledaterangenavigationmarkers:0002:0001">지정된 제목과 날짜 범위 탐색 마커 배열로 navigation markers 그룹을 초기화합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:inittitledaterangenavigationmarkers:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:inittitledaterangenavigationmarkers:0004:0001">tvOS 9.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
init(title: String?, dateRangeNavigationMarkers navigationMarkers: [AVDateRangeMetadataGroup])
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">새 탐색 마커 그룹입니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">재생할 자산에 마커 그룹을 연결하려면 <a href="https://developer.apple.com/documentation/AVFoundation/AVPlayerItem">@@TOKEN_0@@</a> 객체의 <a href="https://developer.apple.com/documentation/AVFoundation/AVPlayerItem/navigationMarkerGroups">@@TOKEN_1@@</a> 속성을 사용합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">To create a chapter list, pass <code>nil</code> for the <code>title</code> parameter and set the group as the first item in the player item’s <a href="https://developer.apple.com/documentation/AVFoundation/AVPlayerItem/navigationMarkerGroups">@@TOKEN_2@@</a> array.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0002">미디어 탐색을 위한 추가 옵션(예: 녹화 스포츠 이벤트의 “Goals Scored” 그룹)을 제공하려면 배열의 각 마커 그룹에 고유한 <code>title</code> 값을 지정합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0012:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0001"><code>title</code>: 마커 그룹에 표시할 제목입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0002"><code>navigationMarkers</code>: 그룹이 탐색을 제공하는 날짜 범위 탐색 마커 배열입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0014:0001">참고</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001">[init(title: String?, timedNavigationMarkers: [AVTimedMetadataGroup])](avnavigationmarkersgroup/init(title:timednavigationmarkers:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">지정된 제목과 time-based 탐색 마커 배열로 탐색 마커 그룹을 초기화합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">*<a href="https://developer.apple.com/documentation/avkit/avnavigationmarkersgroup/init(title:daterangenavigationmarkers:">Apple Developer에서 보기</a>)*</span>

---
source_path: "documentation/AVFoundation/avmutablemovie/init-dataoptionserror.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfoundation/avmutablemovie/init-dataoptionserror"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:initdataoptionserror:0000:0001">init(data:options:error:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initdataoptionserror:0001:0001">**Framework**: AVFoundation **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initdataoptionserror:0002:0001">데이터 개체에 저장된 movie에서 변경 가능한 movie 객체를 생성합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initdataoptionserror:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:initdataoptionserror:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initdataoptionserror:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initdataoptionserror:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:initdataoptionserror:0004:0004">macOS 10.11+</span>
- <span class="ko-segment" data-segment-id="seg:list:initdataoptionserror:0004:0005">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initdataoptionserror:0004:0006">watchOS 6.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
init(data: Data, options: [String : Any]? = nil, error: ()) throws
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001"><code>AVMutableMovie</code> 객체입니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0009:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0001">To associate marker groups with an asset for playback, use the <a href="https://developer.apple.com/documentation/AVFoundation/AVPlayerItem/navigationMarkerGroups">@@TOKEN_0@@</a> property of an <a href="https://developer.apple.com/documentation/AVFoundation/AVPlayerItem">@@TOKEN_1@@</a> object.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0010:0002">파일에서 <code>AVMutableMovie</code>를 만든 다음 트랙에 샘플 버퍼를 추가하려면 샘플 데이터가 기록될 위치를 지정하도록 이러한 속성 중 하나를 먼저 설정해야 합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">To create a chapter list, pass <code>nil</code> for the <code>title</code> parameter and set the group as the first item in the player item’s <a href="https://developer.apple.com/documentation/AVFoundation/AVPlayerItem/navigationMarkerGroups">@@TOKEN_2@@</a> array.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0012:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0001"><code>title</code>: The title to present for the markers group.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0013:0002"><code>navigationMarkers</code>: The array of timed navigation markers for which the group provides navigation.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0014:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001">[init(url: URL, options: [String : Any]?, error: ()) throws](avmutablemovie/init(url:options:error:)-8rnnj.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">ISO base media file의 QuickTime movie 파일에 저장된 movie 헤더에서 변경 가능한 movie 객체를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001">[init(settingsFrom: AVMovie?, options: [String : Any]?) throws](avmutablemovie/init(settingsfrom:options:).md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">트랙이 없는 변경 가능한 movie 객체를 생성합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">*<a href="https://developer.apple.com/documentation/avfoundation/avmutablemovie/init(data:options:error:">View on Apple Developer</a>)*</span>

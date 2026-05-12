---
source_path: "documentation/ARKit/argeoanchor/init-namecoordinatealtitude-8sbh4.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/argeoanchor/init-namecoordinatealtitude-8sbh4"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:initnamecoordinatealtitude:0000:0001">init(name:coordinate:altitude:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initnamecoordinatealtitude:0001:0001">**Framework**: ARKit **Kind**: init</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initnamecoordinatealtitude:0002:0001">지정된 좌표와 고도로 이름이 지정된 위치 앵커를 초기화합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:initnamecoordinatealtitude:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:initnamecoordinatealtitude:0004:0001">iOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initnamecoordinatealtitude:0004:0002">iPadOS 14.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:initnamecoordinatealtitude:0004:0003">Mac Catalyst 14.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
init(name: String, coordinate: CLLocationCoordinate2D, altitude: CLLocationDistance)
```

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0007:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0001"><code>name</code>: 앵커의 이름입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0002"><code>coordinate</code>: 앵커의 지리적 위치의 위도와 경도입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0008:0003"><code>altitude</code>: 이 앵커와 해수면 사이의 수직 거리(미터)입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="argeoanchor/init(coordinate:altitude:">convenience init(coordinate: CLLocationCoordinate2D, altitude: CLLocationDistance?)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">지정된 좌표와 고도로 위치 앵커를 초기화합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="argeoanchor/init(name:coordinate:altitude:">convenience init(name: String, coordinate: CLLocationCoordinate2D, altitude: CLLocationDistance?)</a>-csze.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">주어진 좌표와 고도로 이름이 지정된 위치 앵커를 초기화합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/arkit/argeoanchor/init(name:coordinate:altitude:">View on Apple Developer</a>-8sbh4)*</span>

---
source_path: "documentation/ARKit/arframe/displaytransform-forviewportsize.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/arframe/displaytransform-forviewportsize"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:displaytransformforviewportsize:0000:0001">displayTransform(for:viewportSize:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:displaytransformforviewportsize:0001:0001">**Framework**: ARKit **Kind**: method</span>

<span class="ko-segment" data-segment-id="seg:paragraph:displaytransformforviewportsize:0002:0001">캡처된 이미지의 정규화된 좌표를 화면에서 카메라 이미지를 렌더링하기에 적절한 좌표 공간으로 변환하는 아핀 변환을 반환합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:displaytransformforviewportsize:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:displaytransformforviewportsize:0004:0001">iOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:displaytransformforviewportsize:0004:0002">iPadOS 11.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:displaytransformforviewportsize:0004:0003">Mac Catalyst 13.1+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func displayTransform(for orientation: UIInterfaceOrientation, viewportSize: CGSize) -> CGAffineTransform
```

## <span class="ko-segment" data-segment-id="seg:heading:mentions:0007:0001">Mentions</span>

- <span class="ko-segment" data-segment-id="seg:list:mentions:0008:0001"><a href="displaying-an-ar-experience-with-metal.md">Displaying an AR Experience with Metal</a></span>

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0009:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0010:0001">캡처된 이미지의 정규화 좌표를 지정된 매개변수를 반영한 정규화 좌표로 변환하는 변환 행렬입니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0011:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0012:0001">정규화된 이미지 좌표는 이미지의 왼쪽 위가 <code>(0,0)</code>이고 오른쪽 아래가 <code>(1,1)</code>입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0013:0001">이 메서드는 지정된 방향과 지정된 뷰포트의 종횡비에 맞추기 위해 카메라 이미지를 조정하는 데 필요한 회전 및 aspect-fit crop 연산을 나타내는 아핀 변환을 생성합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0013:0002">아핀 변환은 뷰포트의 픽셀 크기에 맞춰 스케일링되지 않습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0014:0001"><a href="arframe/capturedimage.md">@@TOKEN_0@@</a> 픽셀 버퍼는 장치 카메라가 캡처한 원본 이미지이므로 장치 방향이나 뷰의 종횡비에 맞게 조정되지 않습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0015:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0016:0001"><code>orientation</code>: 뷰를 표시하기 위한 방향입니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0016:0002"><code>viewportSize</code>: 카메라 이미지를 렌더링하려는 뷰의 크기(포인트 단위)입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0017:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="arframe/lightestimate.md">var lightEstimate: ARLightEstimate?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">카메라 이미지를 기반으로 조명 조건을 추정한 값입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="arframe/rawfeaturepoints.md">var rawFeaturePoints: ARPointCloud?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">ARKit가 월드 트래킹을 수행하기 위해 사용하는 장면 분석의 현재 중간 결과입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="arframe/captureddepthdata.md">var capturedDepthData: AVDepthData?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">전면 카메라 경험에서 캡처된 깊이 데이터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="arframe/captureddepthdatatimestamp.md">var capturedDepthDataTimestamp: TimeInterval</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">해당 프레임의 깊이 데이터(있는 경우)가 캡처된 시점입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="arframe/scenedepth.md">var sceneDepth: ARDepthData?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">AR 경험에서 장치의 후면 카메라와 실제 세계 객체 사이의 거리 데이터입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="arframe/smoothedscenedepth.md">var smoothedSceneDepth: ARDepthData?</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">AR 경험에서 장치의 후면 카메라와 실제 세계 객체 간 거리 측정값의 평균으로, 더 부드러운 시각 효과를 만듭니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">*<a href="https://developer.apple.com/documentation/arkit/arframe/displaytransform(for:viewportsize:">View on Apple Developer</a>)*</span>

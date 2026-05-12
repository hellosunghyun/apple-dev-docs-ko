---
source_path: "documentation/ARKit/occluding-virtual-content-with-people.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/occluding-virtual-content-with-people"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:occluding-virtual-content-with-people:0000:0001">사람을 사용한 가상 콘텐츠 가림 처리</span>

<span class="ko-segment" data-segment-id="seg:paragraph:occluding-virtual-content-with-people:0001:0001">**프레임워크**: ARKit</span>

<span class="ko-segment" data-segment-id="seg:paragraph:occluding-virtual-content-with-people:0002:0001">ARKit이 카메라 피드에서 인식한 사람으로 앱의 가상 콘텐츠를 가립니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:occluding-virtual-content-with-people:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:occluding-virtual-content-with-people:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:occluding-virtual-content-with-people:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:occluding-virtual-content-with-people:0004:0003">Mac Catalyst 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:occluding-virtual-content-with-people:0004:0004">Xcode 16.0+</span>

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0005:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0006:0001">기본적으로 가상 콘텐츠는 카메라 피드의 어떤 항목이든 가립니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0006:0002">예를 들어 사람이 가상 객체 앞을 지나갈 때, 해당 객체가 사람 위에 그려져 AR 경험의 몰입감이 깨질 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0007:0001">!<a href="https://docs-assets.developer.apple.com/published/4c0490a4cc2d074602b03a229cd28680/figure1-annotated.png">사람 위에 겹쳐진 가상 책의 스크린샷.</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0001">ARKit이 카메라 피드에서 인식한 사람으로 가상 콘텐츠를 가리려면 *people occlusion*을 활성화합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0002">그런 다음 앱은 카메라 앞을 지나간 사람 뒤에 가상 객체를 렌더링할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0008:0003">ARKit은 카메라 피드에서 사람이 있는 영역을 식별하고, 해당 영역의 픽셀에 가상 콘텐츠가 그려지지 않도록 해서 가림 처리를 수행합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0009:0001">!<a href="https://docs-assets.developer.apple.com/published/9ec57b947ed7064da9005afeac529989/figure2-annotated.png">사람 뒤에 배치된 가상 책의 스크린샷.</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0010:0001">이 샘플은 RealityKit으로 그래픽을 렌더링하지만 SceneKit에서도 동일한 단계로 people occlusion을 사용할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0010:0002">Metal 앱에서 people occlusion을 사용하려면 <a href="effecting-people-occlusion-in-custom-renderers.md">@@TOKEN_0@@</a>를 참조합니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:verify-device-support-for-people-occlusion:0011:0001">People Occlusion 기기 지원 확인</span>

<span class="ko-segment" data-segment-id="seg:paragraph:verify-device-support-for-people-occlusion:0012:0001">People occlusion은 Apple A12 이상 기기에서 지원됩니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:verify-device-support-for-people-occlusion:0012:0002">people occlusion을 활성화하기 전에 사용자의 기기가 이를 지원하는지 확인합니다.</span>

```swift
guard ARWorldTrackingConfiguration.supportsFrameSemantics(.personSegmentationWithDepth) else {
    fatalError("People occlusion is not supported on this device.")
}
```

> <span class="ko-segment" data-segment-id="seg:blockquote:verify-device-support-for-people-occlusion:0014:0001">**참고**: 기기가 people occlusion을 지원하지 않으면 샘플이 중지됩니다.</span> <span class="ko-segment" data-segment-id="seg:blockquote:verify-device-support-for-people-occlusion:0014:0002">그러나 사용자의 기기가 people occlusion을 지원하지 않더라도 AR 경험은 계속 진행해야 합니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:enable-people-occlusion:0015:0001">People Occlusion 활성화</span>

<span class="ko-segment" data-segment-id="seg:paragraph:enable-people-occlusion:0016:0001">사용자 기기가 people occlusion을 지원하면 구성의 frame semantics에</span>

<span class="ko-segment" data-segment-id="seg:paragraph:enable-people-occlusion:0017:0001"><code>arconfiguration/framesemantics/3194576-personsegmentationwithdepth</code> <a href="arconfiguration/framesemantics-swift.struct/personsegmentationwithdepth.md">@@TOKEN_1@@</a> 옵션을 앱 구성의 frame semantics에 추가합니다.</span>

```swift
config.frameSemantics.insert(.personSegmentationWithDepth)
```

<span class="ko-segment" data-segment-id="seg:paragraph:enable-people-occlusion:0019:0001">세션의 <a href="arsession/configuration.md">@@TOKEN_0@@</a>을 변경할 때마다 세션 변경 사항을 적용하려면 세션을 다시 실행해야 합니다.</span>

```swift
arView.session.run(config)
```

<span class="ko-segment" data-segment-id="seg:paragraph:enable-people-occlusion:0021:0001"><a href="arconfiguration/framesemantics-swift.struct/personsegmentationwithdepth.md">@@TOKEN_0@@</a> 옵션은 사람이 가상 객체보다 카메라에 더 가까울 때에만 가상 객체를 가리도록 지정합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:enable-people-occlusion:0022:0001">!<a href="https://docs-assets.developer.apple.com/published/f6770bbb0eba749cbc51690111811142/figure3-annotated.png">깊이 기반 people occlusion 스크린샷.</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:enable-people-occlusion:0023:0001">반대로 <a href="arconfiguration/framesemantics-swift.struct/personsegmentation.md">@@TOKEN_0@@</a> 프레임 시맨틱을 사용하면 깊이와 무관하게 ARKit이 카메라 피드에서 감지한 사람과 항상 가상 콘텐츠를 가리도록 할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:enable-people-occlusion:0023:0002">이 기법은 예를 들어 크로마키 시나리오에서 유용합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:enable-people-occlusion:0024:0001">!<a href="https://docs-assets.developer.apple.com/published/a8660b7bc5fa2f9d0bbaddb18ecc069c/figure4-annotated.png">가상 배경이 적용된 사람 가림 처리 스크린샷.</a></span>

#### <span class="ko-segment" data-segment-id="seg:heading:disable-people-occlusion:0025:0001">People Occlusion 비활성화</span>

<span class="ko-segment" data-segment-id="seg:paragraph:disable-people-occlusion:0026:0001">성능상 이유로 people occlusion을 비활성화할 수 있는데, 예를 들어 장면에 가상 콘텐츠가 없거나 기기가 심각 또는 치명적 <a href="https://developer.apple.com/documentation/Foundation/ProcessInfo/thermalState-swift.property">@@TOKEN_0@@</a>(참고 <a href="https://developer.apple.com/documentation/Foundation/ProcessInfo/ThermalState-swift.enum">@@TOKEN_1@@</a>) 상태에 도달한 경우에 해당합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:disable-people-occlusion:0026:0002">사람 오클루전을 일시적으로 비활성화하려면 앱의 <a href="arconfiguration/framesemantics-swift.property.md">@@TOKEN_0@@</a>에서 해당 옵션을 제거합니다.</span>

```swift
config.frameSemantics.remove(.personSegmentationWithDepth)
```

<span class="ko-segment" data-segment-id="seg:paragraph:disable-people-occlusion:0028:0001">그런 다음 구성 변경 내용을 적용하려면 세션을 다시 실행합니다.</span>

```swift
arView.session.run(config)
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0030:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0031:0001"><a href="effecting-people-occlusion-in-custom-renderers.md">커스텀 렌더러에서 사람 오클루전 적용</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0032:0001">카메라 피드에서 ARKit가 사람을 인식한 위치에 matte generator를 사용해 앱의 가상 콘텐츠를 오클루드합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0033:0001"><a href="visualizing-and-interacting-with-a-reconstructed-scene.md">폴리곤 메시로 재구성된 장면 시각화 및 상호작용</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0034:0001">폴리곤 메쉬를 사용해 물리적 환경의 형태를 추정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0035:0001"><a href="armattegenerator.md">class ARMatteGenerator</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0036:0001">ARKit가 카메라 피드에서 인식하는 사람과 함께 앱의 가상 콘텐츠를 오클루드하는 데 사용되는 matte 텍스처를 생성하는 객체입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0038:0001">*<a href="https://developer.apple.com/documentation/arkit/occluding-virtual-content-with-people">View on Apple Developer</a>*</span>

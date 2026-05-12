---
source_path: "documentation/ARKit/camera-lighting-and-effects.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/camera-lighting-and-effects"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:camera-lighting-and-effects:0000:0001">카메라, 조명, 효과</span>

<span class="ko-segment" data-segment-id="seg:paragraph:camera-lighting-and-effects:0001:0001">**프레임워크**: ARKit</span>

<span class="ko-segment" data-segment-id="seg:paragraph:camera-lighting-and-effects:0002:0001">현재 세션의 카메라 위치와 조명을 결정하고, 오클루전과 같은 환경 요소에 효과를 적용합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:topics:0003:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:camera:0004:0001">Camera</span>

- <span class="ko-segment" data-segment-id="seg:list:camera:0005:0001"><a href="arcamera.md">class ARCamera</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:camera:0006:0001">특정 프레임에 대한 카메라 위치 및 이미지 특성 정보입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:lighting-effects:0007:0001">조명 효과</span>

- <span class="ko-segment" data-segment-id="seg:list:lighting-effects:0008:0001"><a href="adding-realistic-reflections-to-an-ar-experience.md">Adding realistic reflections to an AR experience</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:lighting-effects:0009:0001">ARKit를 사용해 카메라 이미지에서 환경 프로브 텍스처를 생성하고 반사형 가상 객체를 렌더링합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:lighting-effects:0010:0001"><a href="arenvironmentprobeanchor.md">class AREnvironmentProbeAnchor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:lighting-effects:0011:0001">월드 트래킹 AR 세션의 특정 공간 영역에 대한 환경 조명 정보를 제공하는 객체입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:lighting-effects:0012:0001"><a href="arlightestimate.md">class ARLightEstimate</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:lighting-effects:0013:0001">AR 세션에서 캡처한 비디오 프레임과 연결된 예상 장면 조명 정보입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:lighting-effects:0014:0001"><a href="ardirectionallightestimate.md">class ARDirectionalLightEstimate</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:lighting-effects:0015:0001">얼굴 추적 AR 세션에서 캡처한 비디오 프레임과 연결된 예상 환경 조명 정보입니다.</span>

### <span class="ko-segment" data-segment-id="seg:heading:occlusion:0016:0001">Occlusion</span>

- <span class="ko-segment" data-segment-id="seg:list:occlusion:0017:0001"><a href="occluding-virtual-content-with-people.md">Occluding virtual content with people</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:occlusion:0018:0001">ARKit가 카메라 피드에서 인식한 사람으로 앱의 가상 콘텐츠를 덮습니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:occlusion:0019:0001"><a href="effecting-people-occlusion-in-custom-renderers.md">Effecting People Occlusion in Custom Renderers</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:occlusion:0020:0001">매트 생성기를 사용해 카메라 피드에서 ARKit가 사람을 인식하는 위치의 앱 가상 콘텐츠를 오클루드합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:occlusion:0021:0001"><a href="visualizing-and-interacting-with-a-reconstructed-scene.md">Visualizing and interacting with a reconstructed scene</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:occlusion:0022:0001">다각형 메쉬를 사용해 물리 환경의 형태를 추정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:occlusion:0023:0001"><a href="armattegenerator.md">class ARMatteGenerator</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:occlusion:0024:0001">카메라 피드에서 ARKit가 인식한 사람과 함께 앱의 가상 콘텐츠를 오클루드하기 위해 매트 텍스처를 생성하는 객체입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0025:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="content-anchors.md">Content Anchors</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">평면 표면, 이미지, 실제 객체, 신체 자세, 얼굴을 포함해 물리 환경의 항목을 식별합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="environmental-analysis.md">Environmental Analysis</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">카메라 영상과 부가 데이터를 분석하고, 레이 캐스팅 및 깊이 맵 정보를 사용해 항목의 위치를 결정합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="data-management.md">Data Management</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">스켈레탈 및 얼굴 기하 정보와 저장된 월드 데이터에 대한 자세한 정보를 제공합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="../USD/creating-usd-files-for-apple-devices.md">Creating USD files for Apple devices</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">예상대로 렌더링되는 3D 에셋을 생성합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">*<a href="https://developer.apple.com/documentation/arkit/camera-lighting-and-effects">View on Apple Developer</a>*</span>
